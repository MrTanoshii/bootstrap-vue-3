import{_ as r,o as d,c as k,b as n,w as t,a as e,d as p,e as a,r as c}from"./app.815424ef.js";const g={},h=p('<h1 id="spinners" tabindex="-1"><a class="header-anchor" href="#spinners" aria-hidden="true">#</a> Spinners</h1><p>Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.</p><h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><p>Bootstrap \u201Cspinners\u201D can be used to show the loading state in your projects. They\u2019re built only with HTML and CSS, meaning you don\u2019t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.</p><p>For accessibility purposes, each loader here includes <code>role=&quot;status&quot;</code> and a nested <code>&lt;span class=&quot;visually-hidden&quot;&gt;Loading...&lt;/span&gt;</code>.</p><h2 id="border-spinner" tabindex="-1"><a class="header-anchor" href="#border-spinner" aria-hidden="true">#</a> Border spinner</h2><p>Use the border spinners for a lightweight loading indicator.</p>',7),v=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="colors" tabindex="-1"><a class="header-anchor" href="#colors" aria-hidden="true">#</a> Colors</h3><p>The border spinner uses currentColor for its border-color, meaning you can customize the color with text color utilities. You can use any of our text color utilities on the standard spinner.</p>`,3),m=a("\xA0 "),b=a("\xA0 "),_=a("\xA0 "),q=a("\xA0 "),f=a("\xA0 "),y=a("\xA0 "),w=a("\xA0 "),x=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="growing-spinner" tabindex="-1"><a class="header-anchor" href="#growing-spinner" aria-hidden="true">#</a> Growing spinner</h2><p>If you don\u2019t fancy a border spinner, switch to the grow spinner. While it doesn\u2019t technically spin, it does repeatedly grow!</p>`,3),S=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),L=a("\xA0 "),T=a("\xA0 "),C=a("\xA0 "),z=a("\xA0 "),B=a("\xA0 "),A=a("\xA0 "),I=a("\xA0 "),N=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="alignment" tabindex="-1"><a class="header-anchor" href="#alignment" aria-hidden="true">#</a> Alignment</h2><p>Spinners in Bootstrap are built with <code>rem</code>s, currentColor, and <code>display: inline-flex</code>. This means they can easily be resized, recolored, and quickly aligned.</p><h3 id="margin" tabindex="-1"><a class="header-anchor" href="#margin" aria-hidden="true">#</a> Margin</h3>`,4),F=a("Use "),M={href:"https://getbootstrap.com/docs/5.0/utilities/spacing/",target:"_blank",rel:"noopener noreferrer"},P=a("margin utilities"),U=a(" like "),V=e("code",null,".m-5",-1),Y=a(" for easy spacing."),j=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>m-5<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="placement" tabindex="-1"><a class="header-anchor" href="#placement" aria-hidden="true">#</a> Placement</h3>`,2),D=a("Use "),E={href:"https://getbootstrap.com/docs/5.0/utilities/flex/",target:"_blank",rel:"noopener noreferrer"},H=a("flexbox utilities"),J=a(", "),O={href:"https://getbootstrap.com/docs/5.0/utilities/float/",target:"_blank",rel:"noopener noreferrer"},W=a("float utilities"),G=a(", or "),R={href:"https://getbootstrap.com/docs/5.0/utilities/text/",target:"_blank",rel:"noopener noreferrer"},K=a("text alignment"),Q=a(" utilities to place spinners exactly where you need them in any situation."),X=e("h4",{id:"flex",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#flex","aria-hidden":"true"},"#"),a(" Flex")],-1),Z={class:"d-flex justify-content-center"},$=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flex justify-content-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),nn={class:"d-flex align-items-center text-dark"},an=e("strong",null,"Loading...",-1),sn=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>d-flex align-items-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ms-auto<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="floats" tabindex="-1"><a class="header-anchor" href="#floats" aria-hidden="true">#</a> Floats</h4>`,2),tn={class:"clearfix"},en=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clearfix<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>float-end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="text-align" tabindex="-1"><a class="header-anchor" href="#text-align" aria-hidden="true">#</a> Text align</h4>`,2),pn={class:"text-center"},on=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> Size</h2><p>Set the prop <code>small</code> to <code>true</code> to make a smaller spinner that can quickly be used within other components.</p>`,3),ln=a(" \xA0 "),cn=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">small</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Small spinner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">small</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Small spinner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, use custom CSS or inline styles to change the dimensions as needed.</p>`,2),un=a(" \xA0 "),rn=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Large Spinner<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> 3rem<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Large Spinner<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h2><p>Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.</p>`,3),dn=e("span",{class:"visually-hidden"},"Loading...",-1),kn=a(" \xA0 "),gn=a(" Loading... "),hn=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">small</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visually-hidden<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">small</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
  Loading...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),vn=e("span",{class:"visually-hidden"},"Loading...",-1),mn=a(" \xA0 "),bn=a(" Loading... "),_n=p(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">small</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visually-hidden<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Loading...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-spinner</span> <span class="token attr-name">small</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>grow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-spinner</span><span class="token punctuation">&gt;</span></span>
  Loading...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spinner-accessibility" tabindex="-1"><a class="header-anchor" href="#spinner-accessibility" aria-hidden="true">#</a> Spinner accessibility</h2><p>Place a hidden label text inside the spinner for screen reader users, via the <code>label</code> prop or <code>label</code> slot. The content will be placed inside the spinner wrapped in a <code>&lt;span&gt;</code> element that has the class <code>visually-hidden</code>, which will make the label available to screen reader users.</p><p>For accessibility purposes, each spinner will automatically have a <code>role=&quot;status&quot;</code> attribute when a label is provided. You can easily customize the role if required via prop <code>role</code>. The specified <code>role</code> will not be applied when no label is provided.</p><p>As well, when no label is provided, the spinner will automatically have the attribute <code>aria-hidden=&quot;true&quot;</code> to hide the spinner from screen reader users.</p><h2 id="component-reference" tabindex="-1"><a class="header-anchor" href="#component-reference" aria-hidden="true">#</a> Component reference</h2><h3 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h3><table><thead><tr><th>Property</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td><code>String</code></td><td></td><td>Text content to place in the visually-hidden label</td></tr><tr><td><code>role</code></td><td><code>String</code></td><td><code>&#39;status&#39;</code></td><td>Sets the ARIA attribute <code>role</code> to a specific value</td></tr><tr><td><code>small</code></td><td><code>Boolean</code></td><td><code>false</code></td><td>When set, rendered a smaller spinner suitable for placing in buttons</td></tr><tr><td><code>tag</code></td><td><code>String</code></td><td><code>&#39;span&#39;</code></td><td>Specify the HTML tag to render instead of the default tag</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td><code>&#39;border&#39;</code></td><td>Type of spinner to show. Current supported types are &#39;border&#39; and &#39;grow&#39;</td></tr><tr><td><code>variant</code></td><td><code>String</code></td><td></td><td>Applies one of the Bootstrap theme color variants to the component</td></tr></tbody></table><h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>label</code></td><td>Content to place in the visually-hidden label</td></tr></tbody></table>`,10);function qn(fn,yn){const s=c("b-spinner"),o=c("b-card"),l=c("ClientOnly"),i=c("ExternalLinkIcon"),u=c("b-button");return d(),k("div",null,[h,n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[n(s,{variant:"dark"})]),_:1})]),_:1}),v,n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[n(s,{variant:"primary"}),m,n(s,{variant:"secondary"}),b,n(s,{variant:"success"}),_,n(s,{variant:"danger"}),q,n(s,{variant:"warning"}),f,n(s,{variant:"info"}),y,n(s,{variant:"light"}),w,n(s,{variant:"dark"})]),_:1})]),_:1}),x,n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[n(s,{type:"grow",variant:"dark"})]),_:1})]),_:1}),S,n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[n(s,{type:"grow",variant:"primary"}),L,n(s,{type:"grow",variant:"secondary"}),T,n(s,{type:"grow",variant:"success"}),C,n(s,{type:"grow",variant:"danger"}),z,n(s,{type:"grow",variant:"warning"}),B,n(s,{type:"grow",variant:"info"}),A,n(s,{type:"grow",variant:"light"}),I,n(s,{type:"grow",variant:"dark"})]),_:1})]),_:1}),N,e("p",null,[F,e("a",M,[P,n(i)]),U,V,Y]),n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[n(s,{class:"m-5",variant:"dark"})]),_:1})]),_:1}),j,e("p",null,[D,e("a",E,[H,n(i)]),J,e("a",O,[W,n(i)]),G,e("a",R,[K,n(i)]),Q]),X,n(l,null,{default:t(()=>[n(o,{class:"mt-2"},{default:t(()=>[e("div",Z,[n(s,{variant:"dark"})])]),_:1})]),_:1}),$,n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[e("div",nn,[an,n(s,{class:"ms-auto",variant:"dark"})])]),_:1})]),_:1}),sn,n(l,null,{default:t(()=>[n(o,{class:"mt-2"},{default:t(()=>[e("div",tn,[n(s,{class:"float-end",variant:"dark"})])]),_:1})]),_:1}),en,n(l,null,{default:t(()=>[n(o,{class:"mt-2"},{default:t(()=>[e("div",pn,[n(s,{variant:"dark"})])]),_:1})]),_:1}),on,n(l,null,{default:t(()=>[n(o,{class:"text-dark"},{default:t(()=>[n(s,{small:""}),ln,n(s,{small:"",type:"grow"})]),_:1})]),_:1}),cn,n(l,null,{default:t(()=>[n(o,{class:"text-dark"},{default:t(()=>[n(s,{style:{width:"3rem",height:"3rem"},label:"Large Spinner"}),un,n(s,{style:{width:"3rem",height:"3rem"},label:"Large Spinner",type:"grow"})]),_:1})]),_:1}),rn,n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[n(u,{variant:"primary",disabled:""},{default:t(()=>[n(s,{small:""}),dn]),_:1}),kn,n(u,{variant:"primary",disabled:""},{default:t(()=>[n(s,{small:""}),gn]),_:1})]),_:1})]),_:1}),hn,n(l,null,{default:t(()=>[n(o,null,{default:t(()=>[n(u,{variant:"primary",disabled:""},{default:t(()=>[n(s,{small:"",type:"grow"}),vn]),_:1}),mn,n(u,{variant:"primary",disabled:""},{default:t(()=>[n(s,{small:"",type:"grow"}),bn]),_:1})]),_:1})]),_:1}),_n])}var xn=r(g,[["render",qn],["__file","Spinners.html.vue"]]);export{xn as default};
