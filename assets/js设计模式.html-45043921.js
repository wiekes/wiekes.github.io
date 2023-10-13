import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as s,d as t,f as p}from"./app-59ccfb7d.js";const i="/assets/jsdesign/123.png",u="/assets/jsdesign/1231.png",k="/assets/jsdesign/1232.png",r="/assets/jsdesign/1233.png",d="/assets/jsdesign/1234.png",v="/assets/jsdesign/1235.png",m="/assets/jsdesign/1236.png",b="/assets/jsdesign/1237.png",g="/assets/jsdesign/1238.png",f="/assets/jsdesign/1239.png",y="/assets/jsdesign/12310.png",h="/assets/jsdesign/12311.png",w="/assets/jsdesign/12312.png",q="/assets/jsdesign/12313.png",x="/assets/jsdesign/12314.png",j="/assets/jsdesign/12315.png",_="/assets/jsdesign/12316.png",C="/assets/jsdesign/12317.png",S="/assets/jsdesign/12318.png",F="/assets/jsdesign/12319.png",A="/assets/jsdesign/12320.png",E="/assets/jsdesign/12321.png",L="/assets/jsdesign/12322.png",R="/assets/jsdesign/12323.png",T="/assets/jsdesign/12324.png",U={},M=n("h2",{id:"js-jsdesign",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#js-jsdesign","aria-hidden":"true"},"#"),s(" js jsdesign")],-1),N={href:"https://www.bilibili.com/video/BV1UL4y1h7W9?p=2&share_source=copy_web",target:"_blank",rel:"noopener noreferrer"},I=n("em",null,"2",-1),z={href:"http://t.csdn.cn/tO8Xk",target:"_blank",rel:"noopener noreferrer"},B=p(`<p>面向对象就是解析耦合问题</p><h2 id="构造器模式" tabindex="-1"><a class="header-anchor" href="#构造器模式" aria-hidden="true">#</a> 构造器模式</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 冗余复用</span>
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;n1&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;n2&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Obj</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> obj3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Obj</span><span class="token punctuation">(</span><span class="token string">&quot;n3&quot;</span><span class="token punctuation">,</span> <span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> obj3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原型模式" tabindex="-1"><a class="header-anchor" href="#原型模式" aria-hidden="true">#</a> 原型模式</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Obj</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>

	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">// 每次new的时候都会重新开辟空间 浪费</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>
obj<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
构造器模式
<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>
<span class="token keyword">class</span> 类模式

<span class="token keyword">class</span> <span class="token class-name">Objclass</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">+</span><span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>案例<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        * {
            margin: 0;
            padding: 0;
        }

        ul {
            list-style: none;
        }

        .header {
            display: flex;
            width: 500px;
        }

        .header li {
            flex: 1;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border: 1px solid black;
        }

        .box {
            position: relative;
            height: 200px;
        }

        .box li {
            position: absolute;
            left: 0;
            top: 0;
            width: 500px;
            height: 200px;
            background-color: yellow;
            display: none;
        }

        .header .active {
            background-color: red;
        }

        .box .active {
            display: block;
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>header<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>active<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">5</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">6</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        function Tab(selector,type) {
            this.selector = document.querySelector(selector)
            this.headerItems = this.selector.querySelectorAll(&#39;.header li&#39;)
            this.boxItems = this.selector.querySelectorAll(&#39;.box li&#39;)
            this.type =type
            this.change() // 要调用不然 不生效 因为是给多个子项添加而不是自身所以必须添加方法
        }
        Tab.prototype.change = function(){
            for(let i=0;i&lt;this.headerItems.length;i++){
                this.headerItems[i].addEventListener(this.type,()=&gt;{
                    // console.log(i);
                    // console.log(this);
                    // this.addclassList = &quot;active&quot;
                    // 排他思想
                    for(let m=0;m&lt;this.headerItems.length;m++){
                        this.headerItems[m].classList.remove(&quot;active&quot;)
                        this.boxItems[m].classList.remove(&quot;active&quot;)
                    }
                    this.headerItems[i].classList.add(&quot;active&quot;)
                    this.boxItems[i].classList.add(&quot;active&quot;)
                },false)
            }
        }
        new Tab(&quot;.container1&quot;,&quot;click&quot;)
        new Tab(&quot;.container2&quot;, &quot;mouseover&quot;)
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

<span class="token operator">===</span><span class="token operator">==</span>es6<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>

<span class="token keyword">class</span> <span class="token class-name">Tab</span><span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">selector<span class="token punctuation">,</span>type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	    <span class="token keyword">this</span><span class="token punctuation">.</span>selector <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span>
	    <span class="token keyword">this</span><span class="token punctuation">.</span>headerItems <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selector<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.header li&#39;</span><span class="token punctuation">)</span>
	    <span class="token keyword">this</span><span class="token punctuation">.</span>boxItems <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>selector<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.box li&#39;</span><span class="token punctuation">)</span>
	    <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span>type
	    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 要调用不然 不生效 因为是给多个子项添加而不是自身所以必须添加方法</span>
	<span class="token punctuation">}</span>
	<span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>headerItems<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	        <span class="token keyword">this</span><span class="token punctuation">.</span>headerItems<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>type<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	            <span class="token comment">// console.log(i);</span>
	            <span class="token comment">// console.log(this);</span>
	            <span class="token comment">// this.addclassList = &quot;active&quot;</span>
	            <span class="token comment">// 排他思想</span>
	            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> m<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>m<span class="token operator">&lt;</span><span class="token keyword">this</span><span class="token punctuation">.</span>headerItems<span class="token punctuation">.</span>length<span class="token punctuation">;</span>m<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	                <span class="token keyword">this</span><span class="token punctuation">.</span>headerItems<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span>
	                <span class="token keyword">this</span><span class="token punctuation">.</span>boxItems<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span>
	            <span class="token punctuation">}</span>
	            <span class="token keyword">this</span><span class="token punctuation">.</span>headerItems<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span>
	            <span class="token keyword">this</span><span class="token punctuation">.</span>boxItems<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span>
	        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>
	    <span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工厂模式" tabindex="-1"><a class="header-anchor" href="#工厂模式" aria-hidden="true">#</a> 工厂模式</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>准确的把对象生产出来  提升复用
<span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">role<span class="token punctuation">,</span> pages</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>role  <span class="token operator">=</span> role<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>pages <span class="token operator">=</span> pages<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">function</span> <span class="token function">UserFactory</span><span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">switch</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&quot;superadmin&quot;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;superadmin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;user-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;right-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;editor&quot;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;editor&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;admin&quot;</span><span class="token operator">:</span>
                    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;user-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;right-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误&#39;</span><span class="token punctuation">)</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UserFactory</span><span class="token punctuation">(</span><span class="token string">&quot;editor&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>es6<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token keyword">class</span> <span class="token class-name">User</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">role<span class="token punctuation">,</span> pages</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>role  <span class="token operator">=</span> role<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pages <span class="token operator">=</span> pages<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token function">UserFactory</span><span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">switch</span><span class="token punctuation">(</span>role<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;superadmin&quot;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;superadmin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;user-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;right-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;editor&quot;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;editor&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;admin&quot;</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;user-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;right-manage&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误&#39;</span><span class="token punctuation">)</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象工厂" tabindex="-1"><a class="header-anchor" href="#抽象工厂" aria-hidden="true">#</a> 抽象工厂</h2><p>在工厂模式的基础上再抽离出共同的属性</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>解耦 可以随意的拓展 但比较适合大型项目 关注类  比工厂模式代码复用
<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> role<span class="token punctuation">,</span> pages</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>role <span class="token operator">=</span> role<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pages <span class="token operator">=</span> pages<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">welcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;欢迎&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">dataShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;未定义&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">SuperAdmin</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&quot;superadmin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;user-manage&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;right-manage&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dataShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;superAdmin-datashow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">addRight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
    <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Admin</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&quot;admin&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;right-manage&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dataShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Admin-datashow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Editor</span> <span class="token keyword">extends</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&quot;editor&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;news-manage&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dataShow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Editor-datashow&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">addNews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getAbstracutUserFactory</span><span class="token punctuation">(</span><span class="token parameter">role</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>role<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;superadmin&quot;</span><span class="token operator">:</span>
            <span class="token keyword">return</span> SuperAdmin<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;admin&quot;</span><span class="token operator">:</span>
            <span class="token keyword">return</span> Admin<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> <span class="token string">&quot;editor&quot;</span><span class="token operator">:</span>
            <span class="token keyword">return</span> Editor<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;参数错误&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> UserClass <span class="token operator">=</span> <span class="token function">getAbstracutUserFactory</span><span class="token punctuation">(</span><span class="token string">&#39;superadmin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserClass</span><span class="token punctuation">(</span><span class="token string">&#39;wike&#39;</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span><span class="token function">welcome</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建造者模式" tabindex="-1"><a class="header-anchor" href="#建造者模式" aria-hidden="true">#</a> 建造者模式</h2><figure><img src="`+i+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><figure><img src="'+u+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Navbar</span> <span class="token punctuation">{</span>
	<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;navbar-init&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;navbar-getdata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;navbar-render&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">List</span> <span class="token punctuation">{</span>
	<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;list-init&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;list-getdata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;list-render&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Create</span> <span class="token punctuation">{</span>
	<span class="token keyword">async</span> <span class="token function">startBuild</span><span class="token punctuation">(</span><span class="token parameter">builder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">await</span> builder<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">await</span> builder<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// console.log(111);</span>
		<span class="token keyword">await</span> builder<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> creater <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> navbar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Navbar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">List</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
creater<span class="token punctuation">.</span><span class="token function">startBuild</span><span class="token punctuation">(</span>navbar<span class="token punctuation">)</span><span class="token punctuation">;</span>
creater<span class="token punctuation">.</span><span class="token function">startBuild</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>=================================</p>`,15),D={href:"https://www.notion.so/40c919feb9e14e449102a96eb5cecf6b?pvs=21",target:"_blank",rel:"noopener noreferrer"},O=p('<p>=================================</p><h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2><figure><img src="'+k+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>es5
<span class="token keyword">var</span> Singleton <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> instance

  <span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
      <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
          instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span>age<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> instance
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token string">&#39;wike&#39;</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token string">&#39;wike1&#39;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// User {name: &#39;wike&#39;, age: 22}</span>
<span class="token comment">// User {name: &#39;wike&#39;, age: 22}</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>

<span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span>age</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>Singleton<span class="token punctuation">.</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
            Singleton<span class="token punctuation">.</span>instance <span class="token operator">=</span> <span class="token keyword">this</span>  <span class="token comment">// 存在构造函数身上不是 实例上</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> Singleton<span class="token punctuation">.</span>instance
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token string">&quot;wike&quot;</span><span class="token punctuation">,</span><span class="token number">22</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token string">&#39;wiekes&#39;</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 登录框</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Document</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        .wike{
            height: 200px;
            width: 200px;
            line-height: 200px;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            background-color: yellow;
            text-align: center;
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    &lt;! </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wike<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text"> &gt;
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">open</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>close<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">close</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        const Model = (function(){
            var instance = null
            return function(){
                if(!instance){
                    instance = document.createElement(&#39;div&#39;)
                    instance.innerHTML = &#39;登录框&#39;
                    instance.className = &#39;wike&#39;
                    instance.style.display = &#39;none&#39;
                    document.body.appendChild(instance)
                }
                return instance
            }
        })()
        document.querySelector(&#39;##open&#39;).onclick = function(){
            // 创建model
            let model = new Model()
            // 显示model
            model.style.display = &#39;block&#39;
        }
        document.querySelector(&#39;##close&#39;).onclick= function(){
            let model = new Model()
            model.style.display = &#39;none&#39;
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="装饰器模式-切片编程" tabindex="-1"><a class="header-anchor" href="#装饰器模式-切片编程" aria-hidden="true">#</a> 装饰器模式 切片编程</h2><figure><img src="`+r+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><figure><img src="'+d+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">before</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">beforeFn</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>  <span class="token comment">// 利用闭包记录 _this=this =test</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 对用前置函数</span>
        <span class="token function">beforeFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>arguments<span class="token punctuation">)</span>
        <span class="token comment">// 执行原来的函数</span>
        <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span>arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> test1 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">// 这里已经执行before函数了 且调用对象式test</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token function">test1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>

<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">before</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">beforeFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>  <span class="token comment">// 利用闭包记录</span>
    <span class="token comment">// console.log(this);</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(this);</span>
        <span class="token comment">// 调用前置函数</span>
        <span class="token function">beforeFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
        <span class="token comment">// 执行原来的函数</span>
        <span class="token keyword">return</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">after</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">afterFn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span>  <span class="token comment">// 利用闭包记录</span>
    <span class="token comment">// console.log(this);</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 执行原来的函数</span>
        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">_this</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
        <span class="token comment">// 调用前置函数</span>
        <span class="token function">afterFn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> test1 <span class="token operator">=</span> test<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 链式调用先执行before 再执行after</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">c</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// debugger</span>
<span class="token function">test1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2><figure><img src="`+v+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><p>适配器是功能正常 优化添加方法</p><p>适配器是功能再现有的情况无法正常使用 进行适配</p><p>找平 兼容工作 多一层接口适配环境</p><figure><img src="'+m+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">TencentMap</span><span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;tencentMap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">BaiduMap</span><span class="token punctuation">{</span>
    <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;baidumap&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>适配器<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>
<span class="token keyword">class</span> <span class="token class-name">TencentMapAdapter</span> <span class="token keyword">extends</span> <span class="token class-name">TencentMap</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span>

<span class="token keyword">function</span> <span class="token function">renderMap</span><span class="token punctuation">(</span><span class="token parameter">map</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    map<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">//固定</span>
<span class="token punctuation">}</span>
<span class="token function">renderMap</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TencentMapAdapter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">renderMap</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BaiduMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="策略模式" tabindex="-1"><a class="header-anchor" href="#策略模式" aria-hidden="true">#</a> 策略模式</h2><figure><img src="`+b+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><p>易维护 易扩展</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// 算法与实现分离</span>

<span class="token comment">// 算法</span>
<span class="token keyword">let</span> strategry <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">A</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">B</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">C</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">salary</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> salary <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 实现方法</span>
<span class="token keyword">function</span> <span class="token function">calBonus</span><span class="token punctuation">(</span><span class="token parameter">Level<span class="token punctuation">,</span> salary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> strategry<span class="token punctuation">[</span>Level<span class="token punctuation">]</span><span class="token punctuation">(</span>salary<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">calBonus</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Document</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        li {
            display: flex;
            justify-content: space-between;
        }

        .reditem {
            background-color: red;
        }

        .yellowitem {
            background-color: yellow;
        }

        .greenitem {
            background-color: green;
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myList<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        let list = [
            {
                title: &#39;wike1&#39;,
                type: 1
            },
            {
                title: &#39;wike2&#39;,
                type: 3
            },
            {
                title: &#39;wike3&#39;,
                type: 2
            },
            {
                title: &#39;wike4&#39;,
                type: 1
            }
        ]

        let strategry = {
            1:{
                content:&#39;通过&#39;,
                className:&#39;greenitem&#39;
            },
            2:{
                content:&#39;通过&#39;,
                className:&#39;yellowitem&#39;
            },
            3:{
                content:&#39;不通过&#39;,
                className:&#39;reditem&#39;
            }
        }
        myList.innerHTML = list.map(item =&gt; {
            return\`
            &lt;li&gt;
                &lt;div&gt;\${item.title}&lt;/div&gt;
                &lt;div class=&quot;\${strategry[item.type].className}&quot;&gt;\${strategry[item.type].content}&lt;/div&gt;
            &lt;/li&gt;
            \`
        }).join(&quot;&quot;)
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理模式" tabindex="-1"><a class="header-anchor" href="#代理模式" aria-hidden="true">#</a> 代理模式</h2><figure><img src="`+g+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><figure><img src="'+f+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><p>============================================</p>',25),P={href:"https://www.notion.so/proxy-adb7a7169b914faeb103751d8d7ddb0f?pvs=21",target:"_blank",rel:"noopener noreferrer"},H=p(`<p>============================================</p><p>通过代理实现功能 修改代理的同时也修改了原来的对象 <strong>功能的实现是通过修改代理触发</strong></p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>
<span class="token comment">// vue3 原理</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    let obj = {}
    let boxProxy = new Proxy(obj,{
        get(target,key){
            console.log(&#39;获取值&#39;);
            return target[key]
        },
        set(target,key,value){
            target[key]=value
						if
            box.innerHTML = value
            console.log(&#39;修改值&#39;);
        }
    })
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2><figure><img src="`+y+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><figure><img src="'+h+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Subject</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>observer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">remove</span><span class="token punctuation">(</span><span class="token parameter">observer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observers <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span>item<span class="token operator">!==</span>observer<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
            item<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Observer</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;update&quot;</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> subject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Subject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> observer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">&quot;wike&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> observer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span><span class="token string">&quot;wike1&quot;</span><span class="token punctuation">)</span>
subject<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer1<span class="token punctuation">)</span>
subject<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>observer2<span class="token punctuation">)</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">=</span>

<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Document</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        .box {
            display: flex;
            height: 500px;
        }

        .box .left {
            width: 150px;
            background-color: aqua;
            cursor: pointer;
        }

        .box .left li{
            list-style-type: none;
        }
        .box .right {
            flex: 1;
            background-color: yellow;
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">首页</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">首页</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">用户管理</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">权限管理</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">新闻管理</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bread<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">首页</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        class Subject {
            constructor() {
                this.observers = []
            }
            add(observer) {
                this.observers.push(observer)
            }
            remove(observer) {
                this.observers = this.observers.filter(item =&gt; item !== observer)
            }
            notify(data) {
                this.observers.forEach(item =&gt; {
                    item.update(data)
                })
            }
        }
        class Observer {
            constructor(name) {
                this.ele = document.querySelector(name)
            }
            update(data) {
                // console.log(&quot;update&quot;, this.name);
                this.ele.innerHTML = data
            }
        }

        const subject = new Subject()

        const observer1 = new Observer(&#39;.bread&#39;)
        const observer2 = new Observer(&#39;header&#39;)

        subject.add(observer1)
        subject.add(observer2)
        let oli = document.querySelectorAll(&#39;.left li&#39;)
        for (let i = 0; i &lt; oli.length; i++) {
            oli[i].onclick = function(){
                subject.notify(this.innerHTML)
            }
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="发布订阅模式" tabindex="-1"><a class="header-anchor" href="#发布订阅模式" aria-hidden="true">#</a> 发布订阅模式</h2><p>解耦的观察者模式</p><figure><img src="`+w+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> PubSub <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">pubilsh</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">item</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>cb<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cb<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function">unSubscribe</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 取消所有当前type事件</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 逻辑运算符  this.list[type] 判断是否为空 如果为空就不需要进行第二步</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">!==</span> cb<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">testA</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;testA&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">testB</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;testB&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">testC</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;testC&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">testD</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;testD&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> testA<span class="token punctuation">)</span><span class="token punctuation">;</span>
PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> testB<span class="token punctuation">)</span><span class="token punctuation">;</span>
PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> testC<span class="token punctuation">)</span><span class="token punctuation">;</span>
PubSub<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> testD<span class="token punctuation">)</span><span class="token punctuation">;</span>

PubSub<span class="token punctuation">.</span><span class="token function">pubilsh</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token number">1111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模块模式" tabindex="-1"><a class="header-anchor" href="#模块模式" aria-hidden="true">#</a> 模块模式</h2><figure><img src="`+q+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>闭包
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">var</span> cout <span class="token operator">=</span> <span class="token number">0</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token function">increse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token operator">++</span>cout
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token function">decrese</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			<span class="token keyword">return</span> cout
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

模块化
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&quot;moduleA&quot;</span><span class="token punctuation">,</span>
	<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	import moduleA from &#39;./1.js&#39;
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">function</span> <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>   <span class="token comment">// 导出</span>
	increase<span class="token punctuation">,</span>
	decrease
<span class="token punctuation">}</span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	import moduleA from &#39;./1.js&#39;  // 可以重新命名
	moduleA.increase()  // 使用是通过调用的方式
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>
<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">function</span> <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>   <span class="token comment">// 导出</span>
	increase<span class="token punctuation">,</span>
	decrease
<span class="token punctuation">}</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
	import {increase,decrease} from &#39;./1.js&#39;  // 导入
	increase()  // 使用是通过调用的方式
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>================================</p>`,16),V={href:"https://www.notion.so/ESM-709a025bbb734fecb4bb71bbaa8f57cd?pvs=21",target:"_blank",rel:"noopener noreferrer"},X=p('<p>================================</p><h2 id="桥接模式" tabindex="-1"><a class="header-anchor" href="#桥接模式" aria-hidden="true">#</a> 桥接模式</h2><figure><img src="'+x+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">Aodi1</span><span class="token punctuation">(</span><span class="token parameter">engine</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine
<span class="token punctuation">}</span>

<span class="token class-name">Aodi1</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">platform</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;aodi1 平台&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Aodi1</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">loadEngine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Aodi2</span><span class="token punctuation">(</span><span class="token parameter">engine</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine
<span class="token punctuation">}</span>

<span class="token class-name">Aodi2</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">platform</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;aodi2 平台&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">Aodi2</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">loadEngine</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token constant">V6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;v6引擎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token constant">V8</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">run</span> <span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;v8引擎&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> aodi1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aodi1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">V6</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> aodi2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Aodi2</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">V8</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
aodi1<span class="token punctuation">.</span><span class="token function">loadEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
aodi2<span class="token punctuation">.</span><span class="token function">loadEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">===</span><span class="token operator">==</span>

<span class="token comment">// modal</span>
<span class="token comment">// message</span>
<span class="token comment">// toast</span>

<span class="token comment">// bounce</span>
<span class="token comment">// slicde</span>
<span class="token comment">// rotate</span>

<span class="token keyword">const</span> Animations <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bounce</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token string">&quot;弹跳显示&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">hide</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token string">&quot;弹跳隐藏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">slide</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token string">&quot;滑动显示&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">hide</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token string">&quot;滑动隐藏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token string">&quot;旋转显示&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">hide</span><span class="token punctuation">(</span><span class="token parameter">ele</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ele<span class="token punctuation">,</span><span class="token string">&quot;旋转隐藏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Toast</span><span class="token punctuation">(</span><span class="token parameter">ele<span class="token punctuation">,</span>animation</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ele <span class="token operator">=</span> ele
    <span class="token keyword">this</span><span class="token punctuation">.</span>animation <span class="token operator">=</span> animation
<span class="token punctuation">}</span>
<span class="token class-name">Toast</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">show</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>animation<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token class-name">Toast</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">hide</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>animation<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ele<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> toast <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Toast</span><span class="token punctuation">(</span><span class="token string">&quot;div1&quot;</span><span class="token punctuation">,</span>Animations<span class="token punctuation">.</span>bounce<span class="token punctuation">)</span>
toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
toast<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组合模式" tabindex="-1"><a class="header-anchor" href="#组合模式" aria-hidden="true">#</a> 组合模式</h2><figure><img src="`+j+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">const</span> <span class="token function-variable function">Folder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">folder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>folder <span class="token operator">=</span> folder<span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 保存 子文件 或者 文件</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Folder</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token class-name">Folder</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">scan</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 深度优先遍历</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;scan folder&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>folder<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">File</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>file <span class="token operator">=</span> file<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">File</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">scan</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;scan file&quot;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>file<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 根</span>
<span class="token keyword">const</span> folderR <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Folder</span><span class="token punctuation">(</span><span class="token string">&quot;folderR&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 子文件夹</span>
<span class="token keyword">const</span> folderA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Folder</span><span class="token punctuation">(</span><span class="token string">&quot;folderA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> folderB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Folder</span><span class="token punctuation">(</span><span class="token string">&quot;folderB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> folderC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Folder</span><span class="token punctuation">(</span><span class="token string">&quot;folderC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 文件</span>
<span class="token keyword">let</span> html4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;html4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> html5 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;html5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">CSS2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;CSS2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token constant">CSS3</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;CSS3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> es6 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;es6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

folderR<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>folderA<span class="token punctuation">)</span><span class="token punctuation">;</span>
folderR<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>folderB<span class="token punctuation">)</span><span class="token punctuation">;</span>
folderR<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>folderC<span class="token punctuation">)</span><span class="token punctuation">;</span>

folderA<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>html4<span class="token punctuation">)</span><span class="token punctuation">;</span>
folderA<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>html5<span class="token punctuation">)</span><span class="token punctuation">;</span>
folderB<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">CSS2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
folderB<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token constant">CSS3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
folderC<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>es6<span class="token punctuation">)</span><span class="token punctuation">;</span>

folderR<span class="token punctuation">.</span><span class="token function">scan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>IE=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Document</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        const Folder = function (folder) {
            this.folder = folder
            this.list = []  // 保存 子文件 或者 文件
        }

        Folder.prototype.add = function (res) {
            this.list.push(res)
        }

        Folder.prototype.scan = function () {   // 深度优先遍历
            console.log(&quot;scan folder&quot;, this.folder);
            if(this.folder ===&#39;root&#39;){
                console.log(&#39;不渲染root&#39;);
            }else{
                var oul = document.createElement(&#39;ul&#39;)
                var oli = document.createElement(&#39;li&#39;)
                oli.innerHTML = this.folder
                var ochildul = document.createElement(&#39;ul&#39;)
                // var ochildli = document.createElement(&#39;li&#39;)
                // for(let i=1; i&lt;this.list.length;i++){
                //     // ochildli.innerHTML = this.list[i].folder || this.list[i].file
                //     ochildul.appendChild(ochildli)
                // }
                oli.appendChild(ochildul)
                oul.appendChild(oli)
                root.appendChild(oli)
            }
            for (let i = 0; i &lt; this.list.length; i++) {
                this.list[i].scan(ochildul)
            }
        }

        const File = function(file){
            this.file = file
        }
        File.prototype.scan = function(ochildul){

            let oli = document.createElement(&#39;li&#39;)
            oli.innerHTML = this.file
            ochildul.appendChild(oli)

            console.log(&#39;scan file&#39;,this.file);
        }
        // 根
        const folderR = new Folder(&quot;root&quot;)
        // 子文件夹
        const folderA = new Folder(&quot;用户管理&quot;)
        const folderB = new Folder(&quot;权限管理&quot;)
        const folderC = new Folder(&quot;新闻管理&quot;)

        // 文件
        let adduser = new File(&#39;添加用户&#39;)
        let edituser = new File(&#39;编辑用户&#39;)
        let addright = new File(&#39;添加权限&#39;)
        let editright = new File(&#39;编辑权限&#39;)
        let addnews = new File(&#39;添加新闻&#39;)
        let editnews = new File(&#39;编辑新闻&#39;)

        folderR.add(folderA)
        folderR.add(folderB)
        folderR.add(folderC)

        folderA.add(adduser)
        folderA.add(edituser)
        folderB.add(addright)
        folderB.add(editright)
        folderC.add(addnews)
        folderC.add(editnews)

        folderR.scan()

        console.log(&#39;======================&#39;);
        let t1 = document.createElement(&#39;div&#39;)
        let t2 = document.createElement(&#39;div&#39;)
        let t3 = document.createElement(&#39;div&#39;)
        t1.innerHTML = 1
        t2.innerHTML = 2
        t3.innerHTML = 3

        // 节点操作 没有操作顺序 插入的位置有关
        // 父节点新插入根节点 插入页面 字节再插入父节点之前的变量依赖可以插入页面
        t1.appendChild(t2)
        root1.appendChild(t1)
        console.log(t1);
        t2.appendChild(t3)
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="命令模式-发布接受" tabindex="-1"><a class="header-anchor" href="#命令模式-发布接受" aria-hidden="true">#</a> 命令模式 (发布接受)</h2><figure><img src="`+_+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">Receiver</span> <span class="token punctuation">{</span>
	<span class="token comment">// 接受类</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;接收执行命令&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
	<span class="token comment">// 命令类</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">receiver</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>receiver <span class="token operator">=</span> receiver<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;命令对象=&gt;接收者如何处理&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>receiver<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Invoker</span> <span class="token punctuation">{</span>
	<span class="token comment">// 发布类</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">command</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> command<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;发布请求&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> receiver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Receiver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//  接受订单命令者</span>
<span class="token keyword">const</span> order <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Command</span><span class="token punctuation">(</span>receiver<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 订单</span>
<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Invoker</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发布者</span>
client<span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 逆向思维 要实现  发布 =&gt; 命令 =&gt; 接受</span>
<span class="token comment">// 再实现执行 就必须建立起 命令于接受的联系  同样也必须 建立发布与命令的联系</span>
<span class="token comment">// 所以 必须 现有 reciver 再有 command  最后才是 Invoker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="宏命令-是组合-命令模式-和-组合模式" tabindex="-1"><a class="header-anchor" href="#宏命令-是组合-命令模式-和-组合模式" aria-hidden="true">#</a> 宏命令 是组合 （命令模式 和 组合模式）</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">class</span> <span class="token class-name">MacroCommand</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 子命令对象</span>
    <span class="token punctuation">}</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">command</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> Tab <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;选项卡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> Swipe <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;轮播图&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> macrocommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MacroCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
macrocommand<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Tab<span class="token punctuation">)</span>
macrocommand<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Swipe<span class="token punctuation">)</span>
macrocommand<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

通过一个入口 进行调用

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板方法模式" tabindex="-1"><a class="header-anchor" href="#模板方法模式" aria-hidden="true">#</a> 模板方法模式</h2><figure><img src="`+C+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><figure><img src="'+S+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><p>对于抽象父类的理解 就是把子类的相同特点抽取出来</p><p>例如 泡茶和泡咖啡 都必须经过 烧水 放浸泡物(茶 咖啡) 紧迫 过滤 等步骤只是过程 添加物略有不同</p><p>资料通过继承 父类 活得 过程方法 通子类自己的属性 形成不同的 子类</p><p>父类中的过程不变 但子类的具体步骤可以不同</p><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">var</span> <span class="token function-variable function">Container</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">var</span> list <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>getData <span class="token operator">=</span>
		params<span class="token punctuation">.</span>getData <span class="token operator">||</span>
		<span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;必须传入getData&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">render</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;render&quot;</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token constant">F</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> Myclass1 <span class="token operator">=</span> <span class="token function">Container</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取nowplaying&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> Myclass2 <span class="token operator">=</span> <span class="token function">Container</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取comingsoon&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Myclass1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Myclass2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="迭代器模式" tabindex="-1"><a class="header-anchor" href="#迭代器模式" aria-hidden="true">#</a> 迭代器模式</h2><figure><img src="`+F+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><figure><img src="'+A+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    var wikeEach = function(arr,callback){
        for(let i=0;i&lt;arr.length;i++){
            callback(i,arr[i])
        }
    }
    wikeEach([12,&#39;33&#39;,&#39;wike&#39;,&#39;xu&#39;],function(key,value){
        var oli = document.createElement(&quot;li&quot;)
        oli.innerHTML = value
        list.appendChild(oli)
    })
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以通过写在标签中的 id 名称直接拿到对应的元素（这是一个实验性的方式）</strong></p><figure><img src="`+E+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token comment">// es6 Iterator</span>
<span class="token comment">// Array map set string arguments nodelist</span>
<span class="token comment">// 用于迭代器 方法 就是迭代器对象</span>

<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// for of value 值</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// for in index key</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> it <span class="token operator">=</span> arr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 对象不支持  通过安装接口 实现迭代</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token number">0</span><span class="token operator">:</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
	<span class="token number">1</span><span class="token operator">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span>
	<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 注意</span>
	<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象迭代器" tabindex="-1"><a class="header-anchor" href="#对象迭代器" aria-hidden="true">#</a> 对象迭代器</h2><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
	<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;wike&quot;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">list</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
	<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
						<span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
					<span class="token punctuation">}</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> <span class="token punctuation">{</span>
						<span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
						<span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//for of 循环中用于判断是否继续进行循环</span>
					<span class="token punctuation">}</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> it <span class="token operator">=</span> obj<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>it<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="职责链模式" tabindex="-1"><a class="header-anchor" href="#职责链模式" aria-hidden="true">#</a> 职责链模式</h2><figure><img src="`+L+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><figure><img src="'+R+`" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure><div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">注册</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        btn.onclick = function(){
            if(input.value.length===0){
                console.log(&quot;不能为空&quot;);
            }else{
                if(Number.isNaN(+input.value)){
                    console.log(&quot;必须是数字&quot;);
                }else{
                    if(input.value.length&lt;6){
                        console.log(&quot;必须大于6位数&quot;);
                    }
                }
            }
        }
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

=======================================================================
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">注册</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        btn.onclick = function () {
            checks.check()
        }
        function checkEmpty() {
            if (input.value.length === 0) {
                console.log(&quot;不能为空&quot;);
                return
            }
            return &quot;next&quot;
        }
        function checkNumber() {
            if (Number.isNaN(+input.value)) {
                console.log(&quot;必须是数字&quot;);
                return
            }
            return &quot;next&quot;
        }
        function checkLength() {
            if (input.value.length &lt; 6) {
                console.log(&quot;必须大于6位数&quot;);
                return
            }
            return &quot;next&quot;
        }
        class Chain{
            constructor(fn){
                this.checkRule = fn
                this.nextRule = null
            }
            addRule(nextRule){
                this.nextRule = nextRule
            }
            check(){
                this.checkRule() === &quot;next&quot; ? this.nextRule.check():null
            }
        }

        const checks = new Chain(checkEmpty)
        const checkNumberChain = new Chain(checkNumber)
        const checkLenghtChain = new Chain(checkLength)
        checks.addRule(checkNumberChain)
        checkNumberChain.addRule(checkLenghtChain)
        checkNumberChain.addRule({
            check:()=&gt;&quot;end&quot;
        })
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">

=======================================================================
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">注册</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        btn.onclick = function () {
            checks.check()
        }
        function checkEmpty() {
            if (input.value.length === 0) {
                console.log(&quot;不能为空&quot;);
                return
            }
            return &quot;next&quot;
        }
        function checkNumber() {
            if (Number.isNaN(+input.value)) {
                console.log(&quot;必须是数字&quot;);
                return
            }
            return &quot;next&quot;
        }
        function checkLength() {
            if (input.value.length &lt; 6) {
                console.log(&quot;必须大于6位数&quot;);
                return
            }
            return &quot;next&quot;
        }
        class Chain{
            constructor(fn){
                this.checkRule = fn
                this.nextRule = null
            }
            addRule(nextRule){
                this.nextRule = new Chain(nextRule)
                return this.nextRule   // 要实现链式调用就必须有返回
            }
            check(){
                this.checkRule() === &quot;next&quot; ? this.nextRule.check():null
            }
            end(){
                this.nextRule = {
                    check:()=&gt;&quot;end&quot;
                }
            }
        }

        const checks = new Chain(checkEmpty)
        // checks.addRule(checkNumber).addRule(checkLength).addRule({check:()=&gt;&quot;end&quot;})
        checks.addRule(checkNumber).addRule(checkLength).end()
        // 链式调用 是一开始调用第一个 链条节点 通过之后 触发后续的 链式节点 再创建的时候不能添加 节点或者说是链式调用
        // 必须是创建一个 初始节点 之后 再去添加 后续 节点

    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+T+'" alt="123" tabindex="0" loading="lazy"><figcaption>123</figcaption></figure>',35);function Y($,W){const a=o("ExternalLinkIcon");return c(),l("div",null,[M,n("p",null,[n("a",N,[s("1"),I,s("工厂模式_哔哩哔哩_bilibili"),t(a)])]),n("p",null,[n("a",z,[s("js jsdesign（23 种）_js jsdesign_weixin79893765432...的博客-CSDN 博客"),t(a)])]),B,n("p",null,[n("a",D,[s("类继承"),t(a)])]),O,n("p",null,[n("a",P,[s("proxy"),t(a)])]),H,n("p",null,[n("a",V,[s("ESM 两种导出：命名导出 和 默认导出"),t(a)])]),X])}const K=e(U,[["render",Y],["__file","js设计模式.html.vue"]]);export{K as default};
