import { useState, useCallback } from "react";
import { Upload, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { formSteps } from "@/data/formSteps";

export default function MultiStepForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nome: "", email: "", telefone: "",
    tipo: "", bairro: "", metragem: "",
    fotos: [] as File[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    setForm((p) => ({ ...p, fotos: [...p.fotos, ...Array.from(files)] }));
  }, []);

  const canNext = () => {
    if (step === 0) return form.nome && form.email && form.telefone;
    if (step === 1) return form.tipo && form.bairro && form.metragem;
    return true;
  };

  if (submitted) {
    return (
      <section id="cadastro" className="py-20 md:py-28 bg-muted/50">
        <div className="container max-w-2xl text-center">
          <div className="glass rounded-2xl p-12">
            <div className="gradient-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-secondary-foreground" size={40} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Cadastro Enviado!
            </h2>
            <p className="text-muted-foreground">
              Seus dados foram submetidos para análise. Entraremos em contato em breve.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  return (
    <section id="cadastro" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Formulário</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Pré-Cadastro
          </h2>
        </div>

        <div
          className={`glass rounded-2xl p-6 md:p-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          {/* Progress */}
          <div className="flex items-center justify-between mb-8">
            {formSteps.map((s, i) => (
              <div key={s.label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      i <= step ? "gradient-navy text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < step ? <Check size={18} /> : <s.icon size={18} />}
                  </div>
                  <span className="text-[10px] md:text-xs mt-1 text-muted-foreground font-medium hidden sm:block">
                    {s.label}
                  </span>
                </div>
                {i < formSteps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-2 rounded transition-colors ${i < step ? "bg-primary" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1 */}
          {step === 0 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Nome Completo</label>
                <input className={inputClass} placeholder="Seu nome completo" value={form.nome} onChange={(e) => update("nome", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">E-mail</label>
                <input className={inputClass} type="email" placeholder="email@exemplo.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Telefone</label>
                <input className={inputClass} placeholder="(79) 9 0000-0000" value={form.telefone} onChange={(e) => update("telefone", e.target.value)} />
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Tipo do Imóvel</label>
                <select className={inputClass} value={form.tipo} onChange={(e) => update("tipo", e.target.value)}>
                  <option value="">Selecione</option>
                  <option>Casa</option>
                  <option>Sala Comercial</option>
                  <option>Galpão</option>
                  <option>Loja / Ponto</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Bairro</label>
                <input className={inputClass} placeholder="Ex: Centro, Atalaia, Farolândia" value={form.bairro} onChange={(e) => update("bairro", e.target.value)} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Metragem (m²)</label>
                <input className={inputClass} type="number" placeholder="Ex: 120" value={form.metragem} onChange={(e) => update("metragem", e.target.value)} />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                className={`border-2 border-dashed rounded-2xl p-10 text-center transition-colors cursor-pointer ${
                  dragOver ? "border-primary bg-primary/5" : "border-border"
                }`}
                onClick={() => document.getElementById("file-input")?.click()}
              >
                <Upload className="mx-auto text-muted-foreground mb-4" size={40} />
                <p className="font-medium text-foreground mb-1">Arraste fotos do imóvel aqui</p>
                <p className="text-sm text-muted-foreground">ou clique para selecionar</p>
                <input
                  id="file-input"
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </div>
              {form.fotos.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {form.fotos.map((f, i) => (
                    <span key={i} className="text-xs bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
                      📷 {f.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 4 - Summary */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-lg text-foreground">Resumo do Cadastro</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  ["Nome", form.nome],
                  ["E-mail", form.email],
                  ["Telefone", form.telefone],
                  ["Tipo", form.tipo],
                  ["Bairro", form.bairro],
                  ["Metragem", `${form.metragem} m²`],
                  ["Fotos", `${form.fotos.length} arquivo(s)`],
                ].map(([label, value]) => (
                  <div key={label} className="bg-muted/70 rounded-xl p-3">
                    <span className="text-muted-foreground text-xs">{label}</span>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep((s) => s - 1)}
              disabled={step === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={16} /> Voltar
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canNext()}
                className="flex items-center gap-2 gradient-navy text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold disabled:opacity-50 hover:opacity-90 transition-opacity"
              >
                Próximo <ChevronRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="flex items-center gap-2 gradient-gold text-secondary-foreground px-6 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Submeter para Análise <Check size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
