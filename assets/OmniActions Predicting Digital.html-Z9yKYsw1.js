import{_ as t,c as i,o as n,a as e,b as a}from"./app-B5KSsTBF.js";const o="/assets/Pasted%20image%2020240513201440-e7_y4reS.png",r={},s=e("h1",{id:"omniactions-利用llm预测数字动作以响应现实世界的多模态感官输入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#omniactions-利用llm预测数字动作以响应现实世界的多模态感官输入"},[e("span",null,"OmniActions：利用LLM预测数字动作以响应现实世界的多模态感官输入")])],-1),c=e("div",{style:{position:"relative",width:"100%","padding-top":"56.25%"}},[e("iframe",{src:"https://www.youtube.com/embed/DZ8CXS2iS0o?si=LOiRF7jbp4NPzVyk",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""})],-1),l=a('<h2 id="论文总结" tabindex="-1"><a class="header-anchor" href="#论文总结"><span>论文总结</span></a></h2><h3 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要"><span>摘要</span></a></h3><p>本研究通过日记研究法收集用户对日常生活中的多模态信息（如视觉、听觉）的后续行动数据，以了解人们可能采取的行动。研究人员构建了一个名为OmniActions的系统，该系统利用大型语言模型（LLMs）预测用户在遇到新信息时可能执行的操作，并针对这些信息提供结构化的文本描述。研究通过三种LLM技术（意图分类、基于链式思考的内上下文学习和细粒度微调）进行评估，结果显示使用CoT提示的内上下文学习方法在预测目标信息和后续行动方面表现出较高的准确率。此外，研究人员还开发了一个移动原型系统，并通过用户反馈了解了用户对系统预测及其错误的看法。研究结果为未来增强现实（AR）场景中的交互设计提供了指导。</p><p><img src="'+o+'" alt=""></p><h3 id="问题发现" tabindex="-1"><a class="header-anchor" href="#问题发现"><span>问题发现</span></a></h3><p>人们在日常生活中会遇到各种多模态信息（如图像、文本、音频等），他们可能会有多种后续行动，但如何便捷地针对这些信息采取行动存在挑战。传统的系统往往只能处理单一类型的信息或操作，不能满足用户对复杂信息的多样化需求。</p><h3 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h3><p>为解决这个问题，研究者进行了一项五天的日记研究，鼓励参与者记录他们在遇到新信息时希望执行的操作。通过收集和分析这些数据，构建了一个涵盖多种后续行动的设计空间。接着，设计了OmniActions系统，该系统能够接收多模态输入（如图像、文本、音频），使用现有的模型将其转换为结构化的文本，并利用LLMs预测目标信息和可能的后续行动。</p><h3 id="结果" tabindex="-1"><a class="header-anchor" href="#结果"><span>结果</span></a></h3><p>研究结果表明，通过内上下文学习与CoT提示的方法，OmniActions在预测目标信息和后续行动时表现出较高的准确率。特别是在预测前三个一般性行动时，准确率达到94%。用户反馈表明系统具有潜力，并提供了改进设计和用户体验的建议。这为未来AR平台中理解用户信息需求和提供相关交互指明了方向。</p><h2 id="举一反三" tabindex="-1"><a class="header-anchor" href="#举一反三"><span>举一反三</span></a></h2><h4 id="q1-用户在日常生活中如何与多模态信息交互" tabindex="-1"><a class="header-anchor" href="#q1-用户在日常生活中如何与多模态信息交互"><span>Q1：用户在日常生活中如何与多模态信息交互？</span></a></h4><p>A1：用户通过各种方式与多模态信息进行交互，如拍照、录像、聆听环境声音等，并基于这些信息执行后续操作，如分享、搜索或保存。</p><h4 id="q2-omniactions系统是如何帮助用户减少获取和处理现实世界信息时的摩擦" tabindex="-1"><a class="header-anchor" href="#q2-omniactions系统是如何帮助用户减少获取和处理现实世界信息时的摩擦"><span>Q2： OmniActions系统是如何帮助用户减少获取和处理现实世界信息时的摩擦？</span></a></h4><p>A2：OmniActions通过理解用户的多元感官输入（如视觉、听觉），转化为结构化的文本，并利用大型语言模型预测用户可能采取的后续行动，从而减少用户在识别和响应环境信息上的操作步骤。</p><h4 id="q3-研究团队如何构建并验证omniactions的设计空间" tabindex="-1"><a class="header-anchor" href="#q3-研究团队如何构建并验证omniactions的设计空间"><span>Q3：研究团队如何构建并验证OmniActions的设计空间？</span></a></h4><p>A3：研究团队首先通过工作坊理解日常生活中人们遇到的多模态触发点和相关行为。接着进行日记研究，收集参与者在遇到新信息时希望采取行动的数据，这些数据被用来创建设计空间，并进一步指导OmniActions原型系统的开发。</p><hr><p>原文地址：<a href="https://dl.acm.org/doi/10.1145/3613904.3642068" target="_blank" rel="noopener noreferrer">https://dl.acm.org/doi/10.1145/3613904.3642068</a></p><p>内容由<a href="https://www.mix-copilot.com/" target="_blank" rel="noopener noreferrer">MiX Copilot</a>生成</p>',20),p=[s,c,l];function h(d,m){return n(),i("div",null,p)}const u=t(r,[["render",h],["__file","OmniActions Predicting Digital.html.vue"]]),f=JSON.parse('{"path":"/posts/papers/AI/OmniActions%20Predicting%20Digital.html","title":"OmniActions：利用LLM预测数字动作以响应现实世界的多模态感官输入","lang":"en-US","frontmatter":{"description":"本文介绍了一种名为OmniActions的方法，该方法通过将多模态感官输入转换为结构化文本并利用大型语言模型（LLMs），来预测用户可能采取的数字行动。","date":"2024/5/13 17:08:44","head":[["meta",{"property":"og:url","content":"https://xuezhirong.com/posts/papers/AI/OmniActions%20Predicting%20Digital.html"}],["meta",{"property":"og:site_name","content":"薛志荣的知识库"}],["meta",{"property":"og:title","content":"OmniActions：利用LLM预测数字动作以响应现实世界的多模态感官输入"}],["meta",{"property":"og:description","content":"本文介绍了一种名为OmniActions的方法，该方法通过将多模态感官输入转换为结构化文本并利用大型语言模型（LLMs），来预测用户可能采取的数字行动。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"薛志荣"}],["meta",{"property":"article:published_time","content":"2024-05-13T09:08:44.000Z"}],["meta",{"property":"og:updated_time","content":"2024-07-02T06:05:55.020Z"}],["meta",{"property":"og:modified_time","content":"2024-07-02T06:05:55.020Z"}],["meta",{"name":"twitter:title","content":"OmniActions：利用LLM预测数字动作以响应现实世界的多模态感官输入"}],["meta",{"name":"twitter:description","content":"本文介绍了一种名为OmniActions的方法，该方法通过将多模态感官输入转换为结构化文本并利用大型语言模型（LLMs），来预测用户可能采取的数字行动。"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:site","content":"XueZhirong"}],["meta",{"name":"twitter:creator","content":"XueZhirong"}],["meta",{"name":"share_config","content":"twitter,weibo,facebook,email"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"OmniActions：利用LLM预测数字动作以响应现实世界的多模态感官输入\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-13T09:08:44.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"薛志荣\\"}]}"]]},"headers":[{"level":2,"title":"论文总结","slug":"论文总结","link":"#论文总结","children":[{"level":3,"title":"摘要","slug":"摘要","link":"#摘要","children":[]},{"level":3,"title":"问题发现","slug":"问题发现","link":"#问题发现","children":[]},{"level":3,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":3,"title":"结果","slug":"结果","link":"#结果","children":[]}]},{"level":2,"title":"举一反三","slug":"举一反三","link":"#举一反三","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"posts/papers/AI/OmniActions Predicting Digital.md","excerpt":"\\n<div style=\\"position: relative; width: 100%; padding-top: 56.25%;\\"><iframe src=\\"https://www.youtube.com/embed/DZ8CXS2iS0o?si=LOiRF7jbp4NPzVyk\\" style=\\"position: absolute; top: 0; left: 0; width: 100%; height: 100%;\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" referrerpolicy=\\"strict-origin-when-cross-origin\\" allowfullscreen=\\"\\"></iframe></div>"}');export{u as comp,f as data};