import{_ as t,c as a,o as i,a as e,b as r}from"./app-UZPMjXWD.js";const n={},l=e("h1",{id:"探索大规模语言模型输出的理解与分析-用户感知与界面设计",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#探索大规模语言模型输出的理解与分析-用户感知与界面设计"},[e("span",null,"探索大规模语言模型输出的理解与分析：用户感知与界面设计")])],-1),o=e("div",{style:{position:"relative",width:"100%","padding-top":"56.25%"}},[e("iframe",{src:"https://www.youtube.com/embed/IuSOH13G6W8?si=MWXa-j5cesNcOOg1",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})],-1),s=r('<h2 id="论文总结" tabindex="-1"><a class="header-anchor" href="#论文总结"><span>论文总结</span></a></h2><h3 id="研究机构" tabindex="-1"><a class="header-anchor" href="#研究机构"><span>研究机构</span></a></h3><ul><li>Harvard University: 哈佛大学</li><li>School of Computer Science, Australia: 澳大利亚计算机科学学院</li><li>SEAS, United States: 美国工程与应用科学学院</li></ul><h3 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要"><span>摘要</span></a></h3><p>本研究聚焦于支持大规模语言模型（LLMs）输出的语义理解。通过定性访谈和用户研究，作者发现现有的工具在处理10到1000个响应之间的“中间规模”文本分析时存在问题。为解决这一问题，他们设计并实现了一些现有和新颖的算法及呈现技术，如识别一致性、变异性和两者结合的模式，并提供可视化布局。通过用户研究和案例研究，作者评估了这些功能的效果，并提出了未来的设计方向。</p><h3 id="问题发现" tabindex="-1"><a class="header-anchor" href="#问题发现"><span>问题发现</span></a></h3><ul><li>自动评价不适用于复杂的LLMs应用：参与者表示自动评价无法预测模型在特定任务中的表现。</li><li>面对大量输出时的信息处理挑战：用户在面对众多LLM响应时难以聚焦和理解文本。</li><li>界面设计需适应不同用户需求：用户希望有更多定制化选项来探索和评估模型。</li></ul><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><ul><li>设计了现有和新颖的语义分析算法和呈现技术，以帮助用户识别和比较LLMs输出中的模式和差异。</li><li>实施了两种布局（网格布局和交错布局）来呈现响应，并使用颜色高亮和位置相关词汇聚类（PDC）来增强对比度和相似性检测。</li><li>通过用户研究和案例研究测试这些功能，收集反馈并根据结果调整设计。</li></ul><h3 id="结果" tabindex="-1"><a class="header-anchor" href="#结果"><span>结果</span></a></h3><ul><li>用户在使用新界面时，能更有效地识别差异，尤其是与传统线性阅读相比。</li><li>特别是对于那些需要处理大量LLMs输出的用户，新界面提供了更有价值的语义理解工具。</li><li>案例研究显示了功能的有效性和用户对定制化选项的需求，为未来设计提供了方向。</li></ul><h3 id="结论" tabindex="-1"><a class="header-anchor" href="#结论"><span>结论</span></a></h3><p>通过这项工作，作者为理解和利用大规模语言模型生成的输出提供了一种更有效的手段。他们发现了一些关键的设计原则，并提出了针对此类数据集的新界面和工具的未来发展方向。</p><h2 id="举一反三" tabindex="-1"><a class="header-anchor" href="#举一反三"><span>举一反三</span></a></h2><h4 id="q1-用户在处理大量llm响应时-如何平衡深度阅读与高效浏览" tabindex="-1"><a class="header-anchor" href="#q1-用户在处理大量llm响应时-如何平衡深度阅读与高效浏览"><span>Q1：用户在处理大量LLM响应时，如何平衡深度阅读与高效浏览？</span></a></h4><p>A1：用户可以通过使用我们的系统来实现这一点，例如通过网格布局和定位词句聚类（PDC）功能，帮助他们在保持对整体内容理解的同时，快速识别关键信息和模式。</p><h4 id="q2-如何设计界面以支持用户在不牺牲深度理解的情况下比较不同模型的输出" tabindex="-1"><a class="header-anchor" href="#q2-如何设计界面以支持用户在不牺牲深度理解的情况下比较不同模型的输出"><span>Q2：如何设计界面以支持用户在不牺牲深度理解的情况下比较不同模型的输出？</span></a></h4><p>A2：设计时应考虑提供对比工具，如颜色编码和交叉文档关系可视化。同时，让用户能够聚焦于特定部分，并能轻松地在不同的响应或模型之间切换，以便进行细致的比较。</p><h4 id="q3-如何通过设计帮助用户在处理跨文档文本时-更好地理解和感知文本之间的相似性和差异性" tabindex="-1"><a class="header-anchor" href="#q3-如何通过设计帮助用户在处理跨文档文本时-更好地理解和感知文本之间的相似性和差异性"><span>Q3：如何通过设计帮助用户在处理跨文档文本时，更好地理解和感知文本之间的相似性和差异性？</span></a></h4><p>A3：可以通过提供定位词句聚类（PDC）这样的算法，来高亮显示在不同响应中位置和措辞相近的段落。同时，使用网格布局或交错视图可以更直观地呈现这些相似性和差异性，帮助用户形成整体认知。</p><hr><p><strong>信息来源</strong></p><ul><li><a href="https://dl.acm.org/doi/fullHtml/10.1145/3613904.3642139" target="_blank" rel="noopener noreferrer">https://dl.acm.org/doi/fullHtml/10.1145/3613904.3642139</a></li></ul><p>内容由<a href="https://www.mix-copilot.com/" target="_blank" rel="noopener noreferrer">MiX Copilot</a>基于大语言模型生成，有可能存在错误的风险。</p>',24),p=[l,o,s];function c(h,d){return i(),a("div",null,p)}const u=t(n,[["render",c],["__file","Supporting Sensemaking of Larg.html.vue"]]),g=JSON.parse('{"path":"/posts/papers/AI/Supporting%20Sensemaking%20of%20Larg.html","title":"探索大规模语言模型输出的理解与分析：用户感知与界面设计","lang":"en-US","frontmatter":{"description":"本文介绍了支持大型语言模型输出理解的设计指南，通过文本分析算法和可视化技术帮助用户在大量响应中发现模式和差异。","date":"2024/5/22 21:30:55","head":[["meta",{"property":"og:url","content":"https://xuezhirong.com/posts/papers/AI/Supporting%20Sensemaking%20of%20Larg.html"}],["meta",{"property":"og:site_name","content":"薛志荣的知识库"}],["meta",{"property":"og:title","content":"探索大规模语言模型输出的理解与分析：用户感知与界面设计"}],["meta",{"property":"og:description","content":"本文介绍了支持大型语言模型输出理解的设计指南，通过文本分析算法和可视化技术帮助用户在大量响应中发现模式和差异。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"薛志荣"}],["meta",{"property":"article:published_time","content":"2024-05-22T13:30:55.000Z"}],["meta",{"property":"og:updated_time","content":"2024-06-29T08:35:42.474Z"}],["meta",{"property":"og:modified_time","content":"2024-06-29T08:35:42.474Z"}],["meta",{"name":"twitter:title","content":"探索大规模语言模型输出的理解与分析：用户感知与界面设计"}],["meta",{"name":"twitter:description","content":"本文介绍了支持大型语言模型输出理解的设计指南，通过文本分析算法和可视化技术帮助用户在大量响应中发现模式和差异。"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:site","content":"XueZhirong"}],["meta",{"name":"twitter:creator","content":"XueZhirong"}],["meta",{"name":"share_config","content":"twitter,weibo,facebook,email"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"探索大规模语言模型输出的理解与分析：用户感知与界面设计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-22T13:30:55.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"薛志荣\\"}]}"]]},"headers":[{"level":2,"title":"论文总结","slug":"论文总结","link":"#论文总结","children":[{"level":3,"title":"研究机构","slug":"研究机构","link":"#研究机构","children":[]},{"level":3,"title":"摘要","slug":"摘要","link":"#摘要","children":[]},{"level":3,"title":"问题发现","slug":"问题发现","link":"#问题发现","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":3,"title":"结果","slug":"结果","link":"#结果","children":[]},{"level":3,"title":"结论","slug":"结论","link":"#结论","children":[]}]},{"level":2,"title":"举一反三","slug":"举一反三","link":"#举一反三","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"posts/papers/AI/Supporting Sensemaking of Larg.md","excerpt":"\\n<div style=\\"position: relative; width: 100%; padding-top: 56.25%;\\"><iframe src=\\"https://www.youtube.com/embed/IuSOH13G6W8?si=MWXa-j5cesNcOOg1\\" style=\\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" referrerpolicy=\\"strict-origin-when-cross-origin\\" allowfullscreen=\\"\\"></iframe></div>"}');export{u as comp,g as data};