import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathRendererProps {
  content: string;
  display?: boolean;
  className?: string;
}

function renderLatex(content: string): string {
  let result = content;
  result = result.replace(/\$\$([^$]+)\$\$/g, (_, math: string) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return `<code class="bg-gray-100 px-1 rounded">${math}</code>`;
    }
  });
  result = result.replace(/\$([^$]+)\$/g, (_, math: string) => {
    try {
      return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return `<code class="bg-gray-100 px-1 rounded">${math}</code>`;
    }
  });
  return result;
}

export function MathRenderer({ content, display = false, className = '' }: MathRendererProps) {
  const html = renderLatex(content);
  return (
    <span
      className={`${display ? 'block text-center my-3' : 'inline'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function MathFormula({ formula, ...props }: { formula: string; display?: boolean; className?: string }) {
  const rendered = formula
    .replace(/\^([0-9.]+|\w+)/g, '^{$1}')
    .replace(/\$/g, '')
    .replace(/×/g, '\\times ')
    .replace(/π/g, '\\pi ')
    .replace(/ρ/g, '\\rho ')
    .replace(/μ/g, '\\mu ')
    .replace(/θ/g, '\\theta ')
    .replace(/φ/g, '\\phi ')
    .replace(/α/g, '\\alpha ')
    .replace(/β/g, '\\beta ')
    .replace(/Δ/g, '\\Delta ')
    .replace(/η/g, '\\eta ')
    .replace(/ν/g, '\\nu ')
    .replace(/≈/g, '\\approx ')
    .replace(/≥/g, '\\ge ')
    .replace(/≤/g, '\\le ')
    .replace(/±/g, '\\pm ')
    .replace(/·/g, '\\cdot ')
    .replace(/²/g, '^{2}')
    .replace(/³/g, '^{3}')
    .replace(/√\(([^)]*)\)/g, '\\sqrt{$1}')
    .replace(/√\[([^\]]*)\]/g, '\\sqrt{$1}')
    .replace(/√(\w)/g, '\\sqrt{$1}')
    .replace(/(\w)\u0304/g, '\\bar{$1}')
    .replace(/σ/g, '\\sigma ')
    .replace(/Σ/g, '\\Sigma ')
    .replace(/∫/g, '\\int ')
    .replace(/∂/g, '\\partial ')
    .replace(/∞/g, '\\infty ')
    .replace(/ᵢ/g, '_i')
    .replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿ]+/g, (m: string) => {
      const map: Record<string, string> = {'⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁺':'+','⁻':'-','⁼':'=','⁽':'(','⁾':')','ⁿ':'n'};
      return '^{' + m.split('').map(c => map[c] || c).join('') + '}';
    });


  return <MathRenderer content={`$${rendered}$`} {...props} />;
}
