import { useState, useCallback } from "react";
import { Upload, ChevronRight, ChevronLeft, Check } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { formSteps } from "../data/formSteps";

// Componentes shadcn/ui
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

export default function MultiStepForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipo: "",
    bairro: "",
    metragem: "",
    fotos: [] as File[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const update = (field: string, value: string) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return;
    setForm((p) => ({ ...p, fotos: [...p.fotos, ...Array.from(files)] }));
  }, []);

  const progressValue = ((step + 1) / formSteps.length) * 100;

  const canNext = () => {
    if (step === 0) return form.nome && form.email && form.telefone;
    if (step === 1) return form.tipo && form.bairro && form.metragem;
    return true;
  };

  if (submitted) {
    return (
      <section id="cadastro" className="py-20 md:py-28 bg-muted/50">
        <div className="container max-w-2xl text-center">
          <Card className="glass border-none p-12 rounded-2xl">
            <div className="gradient-gold w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Check className="text-secondary-foreground" size={40} />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Cadastro Enviado!
            </h2>
            <p className="text-muted-foreground">
              Seus dados foram submetidos para análise. Entraremos em contato em
              breve.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="cadastro" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">
            Formulário
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Pré-Cadastro
          </h2>
        </div>

        <Card
          className={`glass border-none rounded-2xl overflow-hidden ${isVisible ? "animate-fade-up" : "opacity-0"}`}
        >
          <div className="px-6 md:px-10 pt-8">
            <Progress value={progressValue} className="h-2 mb-8" />

            <div className="flex items-center justify-between mb-8">
              {formSteps.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center flex-1"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      i <= step
                        ? "gradient-navy text-primary-foreground scale-110"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i < step ? <Check size={18} /> : <s.icon size={18} />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CardContent className="px-6 md:px-10 pb-10">
            {/* Step 1 */}
            {step === 0 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={(e) => update("nome", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@exemplo.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    id="telefone"
                    placeholder="(79) 9 0000-0000"
                    value={form.telefone}
                    onChange={(e) => update("telefone", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <div className="space-y-2">
                  <Label>Tipo do Imóvel</Label>
                  <Select
                    value={form.tipo}
                    onValueChange={(v) => update("tipo", v)}
                  >
                    <SelectTrigger className="rounded-xl h-12">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Casa">Casa</SelectItem>
                      <SelectItem value="Sala Comercial">
                        Sala Comercial
                      </SelectItem>
                      <SelectItem value="Galpão">Galpão</SelectItem>
                      <SelectItem value="Loja">Loja / Ponto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bairro">Bairro</Label>
                  <Input
                    id="bairro"
                    placeholder="Ex: Centro, Atalaia"
                    value={form.bairro}
                    onChange={(e) => update("bairro", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="metragem">Metragem (m²)</Label>
                  <Input
                    id="metragem"
                    type="number"
                    placeholder="Ex: 120"
                    value={form.metragem}
                    onChange={(e) => update("metragem", e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <div className="animate-in fade-in slide-in-from-right-4">
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    handleFiles(e.dataTransfer.files);
                  }}
                  className={`border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer ${
                    dragOver
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => document.getElementById("file-input")?.click()}
                >
                  <Upload
                    className="mx-auto text-muted-foreground mb-4"
                    size={40}
                  />
                  <p className="font-medium text-foreground mb-1">
                    Arraste fotos do imóvel aqui
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ou clique para selecionar
                  </p>
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
                      <span
                        key={i}
                        className="text-[10px] bg-primary/10 px-3 py-1.5 rounded-full text-primary font-medium flex items-center gap-1"
                      >
                        <Check size={12} /> {f.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 4 - Summary */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                <h3 className="font-heading font-bold text-lg text-foreground">
                  Resumo do Cadastro
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {[
                    ["Nome", form.nome],
                    ["E-mail", form.email],
                    ["Telefone", form.telefone],
                    ["Tipo", form.tipo],
                    ["Bairro", form.bairro],
                    ["Metragem", `${form.metragem} m²`],
                    ["Fotos", `${form.fotos.length} arquivo(s)`],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="bg-muted/70 rounded-xl p-3 border border-border/50"
                    >
                      <span className="text-muted-foreground text-[10px] uppercase font-bold">
                        {label}
                      </span>
                      <p className="font-medium text-foreground truncate">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10">
              <Button
                variant="ghost"
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0}
                className="rounded-xl px-6 h-12"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Voltar
              </Button>

              {step < 3 ? (
                <Button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canNext()}
                  className="gradient-navy text-primary-foreground rounded-xl px-8 h-12 font-semibold transition-all hover:scale-[1.02]"
                >
                  Próximo <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  onClick={() => setSubmitted(true)}
                  className="gradient-gold text-secondary-foreground rounded-xl px-8 h-12 font-bold shadow-lg hover:opacity-90 transition-all hover:scale-[1.02]"
                >
                  Submeter Cadastro <Check className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
