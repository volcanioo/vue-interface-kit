<template>
    <div id="app" class="row" style="margin: 0;">
        <aside class="col sidebar">
            <h1 class="color-red-mid">Vue IDK</h1>
            <span class="color-white" style="font-size: 14px;opacity: .2;">Interface Development Kit/vue</span>

            <nav class="navigation">
                <ul>
                    <li>
                        <a href="#" class="active"> Main </a>
                        <ul>
                            <li><a href="#why-link">Why</a></li>
                            <li><a href="#benefits-link">Benefits</a></li>
                            <li><a href="#dependencies-link">Dependencies</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#grid-link">Grid</a>
                    </li>
                    <li>
                        <a href="#colors-link">Colors</a>
                        <ul>
                            <li><a href="#colors-and-background-classes-link">Color and Background Classes</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#fields-link"> Fields </a>
                        <ul>
                            <li><a href="#field-structure-link">Field Structure</a></li>
                            <li><a href="#labels-link">Labels</a></li>
                            <li><a href="#validations-link">Validations</a></li>
                            <li><a href="#input-link">Input</a></li>
                            <li><a href="#textarea-link">Textarea</a></li>
                            <li><a href="#checkboxes-and-radios-link">Checkbox and Radio</a></li>
                            <li><a href="#select-link">Select</a></li>
                            <li><a href="#tag-link">Tag</a></li>
                            <li><a href="#date-time-picker-link">Date & Time Picker</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#buttons-link">Buttons</a>
                        <ul>
                            <li><a href="#button-link">Button</a></li>
                            <li><a href="#badge-link">Badge</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#card-link">Cards</a>
                    </li>
                </ul>
            </nav>
        </aside>
        <div class="col contains">
            <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

            <!-- Page -->
            <h1 class="page-link" id="main-link">Main</h1>
            <h2 class="page-link" id="why-link">Why</h2>
            <p>We developed this structure because improve performance on css side and be faster about implementation problems. In all designs have same structures but every section change ownself after revisions. These problems was creating new issues for front-end developers.</p>
            <h2 class="page-link" id="benefits-link">Benefits</h2>
            <ol>
                <li>All projects will use same buttons/inputs and grid structures in this way we don't live any confused about the projects.</li>
                <li>All components working on one class and these classes have a prefix. We create t- prefix for this purpose. (t-fields, t-buttons, t-cards, t-'......')</li>
                <li>Advanced color palette</li>
            </ol>
            <h2 class="page-link" id="dependencies-link">Dependencies</h2>
            <ol>
                <li>Vue (<a href="https://vuejs.org/">https://vuejs.org/</a>)</li>
                <li>Multiselect (<a href="https://vue-multiselect.js.org">https://vue-multiselect.js.org</a>)</li>
                <li>VCalendar (<a href="https://vcalendar.io">https://vcalendar.io</a>)</li>
            </ol>

            <!-- Page -->
            <h1 class="page-link" id="grid-link">Grid</h1>
            <p>We are using bootstrap grid system. If you want learn more information and usage style about grid system. <a href="#">Check the bootstrap documentation.</a></p>

            <!-- Page -->
            <h1 class="page-link" id="colors-link">Colors</h1>
            <p>We developed advanced color palette for structure. Every color has codename and every color has a background/color class. If you want change background or color property any element you can use color classes.</p>
            <figure>
                <img src="~@/assets/images/palette.png" alt="Palette of Colors">
                <figcaption>Palette of Colors</figcaption>
            </figure>

            <h2 class="page-link" id="colors-and-background-classes-link">Color and Background Classes</h2>
            <p>At the top we explained color palette schema. Every color and background should have a class with codenames. If you need change color property you should use <span class="-bg">color-</span> prefix. If you need change background property you can use <span class="-bg">bg-</span> prefix. After used prefix you should use color codename.</p>

            <div class="row">
                <div class="col-md-6">
                    <strong style="margin-bottom: 5px;display: block;">Colorless Using</strong>
                    <div class="toggle">
                        <div class="titles">
                            <span @click="content2Tab=true" :class="{'active': content2Tab}">Preview</span>
                            <span @click="content2Tab=false" :class="{'active': !content2Tab}">Code</span>
                        </div>
                        <div class="contents">
                            <div class="content-asider" v-show="content2Tab">
                                <section class="article">
                                    <h2 class="article--title" style="margin: 0;">About Us</h2>
                                    <article class="article--content"> Content </article>
                                </section>
                            </div>
                            <div v-show="!content2Tab">
                                <pre v-highlightjs><code class="html">&lt;section class="article"&gt;
    &lt;h2 class="article--title"&gt;About Us&lt;/h2&gt;
    &lt;article class="article--content"&gt; Content &lt;/article&gt;
&lt;/section&gt;</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <strong style="margin-bottom: 5px;display: block;">Colored Using (with Color Palette)</strong>
                    <div class="toggle">
                        <div class="titles">
                            <span @click="content1Tab=true" :class="{'active': content1Tab}">Preview</span>
                            <span @click="content1Tab=false" :class="{'active': !content1Tab}">Code</span>
                        </div>
                        <div class="contents">
                            <div class="content-asider" v-show="content1Tab">
                                <section class="article">
                                    <h2 class="article--title color-green-dark" style="margin: 0;">About Us</h2>
                                    <article class="article--content bg-green-dark color-white"> Content </article>
                                </section>
                            </div>
                            <div v-show="!content1Tab">
                                <pre v-highlightjs><code class="html"><code class="html">&lt;section class="article"&gt;
    &lt;h2 class="article--title color-green-dark"&gt;About Us&lt;/h2&gt;
    &lt;article class="article--content bg-green-dark color-white"&gt;Content&lt;/article&gt;
&lt;/section&gt;</code></code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page -->
            <h1 class="page-link" id="fields-link">Fields</h1>
            <p>All fields work in a parent element. The reason of this if projects have a different classes and problem live possibly so high. If you want use any field you should use at <span class="-bg">t-fields</span> element content. Same time you should use a data attribute for field types.</p>
            <p>We developed <span class="-bg">data</span> structure for all fields. Because we has so many fields and all of them have a common command lines. For this reason you should <span class="-bg">data-field</span> attribute.</p>

            <p><strong>In this way;</strong></p>
            <ol>
                <li>Reduce code repeat</li>
                <li>If a back-end developer wants develop a widget on field structures it can develop easily</li>
                <li>Sustainability and Extensibility</li>
                <li>Not creating a lot of class and support every different structures (material, buefy...)</li>
            </ol>

            <h2 class="page-link" id="field-structure-link">Field Structure</h2>
            <pre v-highlightjs><code class="html">&lt;div class="t-field" data-field=" ~field_type~ "&gt;
    ~label_area~
    ~field_area~
    ~description_area~
&lt;/div&gt;</code></pre>

            <table>
                <thead>
                    <tr>
                        <th>Codes</th>
                        <th align="center">Condition</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>field_type</td>
                        <td align="center">Required</td>
                        <td>You should find a <a href="#field-types">field type</a>.</td>
                    </tr>
                    <tr>
                        <td>label_area</td>
                        <td align="center"><code>Optional</code></td>
                        <td>You should use <a href="#labels">label nodes</a>.</td>
                    </tr>
                    <tr>
                        <td>field_area</td>
                        <td align="center">Required</td>
                        <td>After find a field type, you know how to use field. At the bottom explaining all fields clearly.</td>
                    </tr>
                    <tr>
                        <td>description_area</td>
                        <td align="center"><code>Optional</code></td>
                        <td>You should use descriptions.</td>
                    </tr>
                </tbody>
            </table>

            <h2 class="page-link" id="labels-link">Labels</h2>
            <p>Generally for this area usage <span class="-bg">span</span> or <span class="-bg">label</span> nodes. <span class="-bg">label</span> node defines to <span class="-bg">The "form" attribute is new in HTML5. by W3C.</span> It's mean if you create a form and you need input label you should use label. <br /><br /> For this reason we are using <span class="-bg">label</span> node.</p>

            <blockquote>At the bottom we used input type example. Please just look at label nodes. If you want change field or input type you can change. All fields using label tag like examples.</blockquote>

            <div style="height: 20px;"></div>
            <strong>Usage</strong>
            <div style="height: 5px;"></div>
            <pre v-highlightjs><code class="html">&lt;div class="t-field" data-field="input"&gt;
    &lt;label for="title"&gt;Title&lt;/label&gt;  &lt;!-- here --&gt;
    &lt;input type="text" id="title" /&gt;
&lt;/div&gt;</code></pre>

            <hr style="margin-top: 30px !important;">

            <p>Every input has own attributes ownself. One of them <span class="-bg">required</span> attribute. If any element has a required attribute, we need show the user too. For this reason we developed <span class="-bg">required</span> class.</p>

            <p>After added <span class="-bg">required</span> class css creating a <span class="-bg">:after</span> in <span class="-bg">label</span> node for <span class="-bg">*</span> required symbol and with this if you want you can develop a validation system on this class. If you want show to "success variable alert" you should adding success class.</p>

            <div class="toggle">
                <div class="titles">
                    <span @click="content3Tab=true" :class="{'active': content3Tab}">Preview</span>
                    <span @click="content3Tab=false" :class="{'active': !content3Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content3Tab">
                        <div class="t-fields required" data-field="input">
                            <label for="name">Name (Required)</label>
                            <input type="text" id="name" placeholder="Add a name...">
                        </div>
                        <div class="clear" style="height: 5px;"></div>
                        <div class="t-fields required warning" data-field="input">
                            <label for="name">Name (Required Warning)</label>
                            <input type="text" id="name" placeholder="Add a name...">
                        </div>
                        <div class="clear" style="height: 5px;"></div>
                        <div class="t-fields required success" data-field="input">
                            <label for="name">Name (Required Validate)</label>
                            <input type="text" id="name" placeholder="Add a name...">
                        </div>
                    </div>
                    <div v-show="!content3Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Normally Required Using --&gt;
&lt;div class="t-fields required" data-field="input"&gt;
    &lt;label for="name"&gt;Name (Required)&lt;/label&gt;
    &lt;input type="text" id="name" placeholder="Add a name..."&gt;
&lt;/div&gt;

&lt;!-- Warning Required Using --&gt;
&lt;div class="t-fields required warning" data-field="input"&gt;
    &lt;label for="name"&gt;Name (Required Warning)&lt;/label&gt;
    &lt;input type="text" id="name" placeholder="Add a name..."&gt;
&lt;/div&gt;

&lt;!-- Success Required Using --&gt;
&lt;div class="t-fields required success" data-field="input"&gt;
    &lt;label for="name"&gt;Name (Required Validate)&lt;/label&gt;
    &lt;input type="text" id="name" placeholder="Add a name..."&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h2 id="validations-link">Validation</h2>
            <p>We are supporting almost all fields on browsers.</p>
            <p>We are create a new validation structure for all fields. Almost all fields need to validation and every validation has some types. <span class="-bg">error</span>, <span class="-bg">success</span>, <span class="-bg">warning</span>, <span class="-bg">etc</span>.</p>
            <p>We developed for validations <span class="-bg">data-validation</span> attribute. If any field option need a validation developer should use this attribute. We developed validation without classes because;</p>

            <ol>
                <li>It's work regular in kit structure</li>
                <li>We have so many option on any field. If we use classes every option, developers can lose structure logic.</li>
                <li>Every class meaning for dom it's a miliseconds. But for attributes not work like that.</li>
            </ol>

            <strong>Hint Messages</strong>
            <p>If you want enter any hint message you should use <span class="-bg">description</span> property. If you add <span class="-bg">data-message</span> attribute to <span class="-bg">description</span> element. When validations work, hint messages can be show.</p>

            <div class="toggle">
                <div class="titles">
                    <span @click="content5Tab=true" :class="{'active': content5Tab}">Preview</span>
                    <span @click="content5Tab=false" :class="{'active': !content5Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content5Tab">
                        <div class="t-fields required" data-field="input" data-validation="error">
                            <label for="name">Name (Error)</label>
                            <input type="text" id="name" placeholder="Add a name..." value="It's a wrong type name.">
                            <span class="_description" data-message="Alert hint message.">Description area</span>
                        </div>
                        <div class="clear" style="height: 10px;"></div>
                        <div class="t-fields required success" data-field="input" data-validation="success">
                            <label for="name">Name (Success)</label>
                            <input type="text" id="name" placeholder="Add a name..." value="It's a good name.">
                            <span class="_description" data-message="Good hint message.">Description area</span>
                        </div>
                        <div class="clear" style="height: 10px;"></div>
                        <div class="t-fields required warning" data-field="input" data-validation="warning">
                            <label for="name">Name (Warning)</label>
                            <input type="text" id="name" placeholder="Add a name..." value="We are hiring!">
                            <span class="_description" data-message="Good hint message.">Description area</span>
                        </div>
                    </div>
                    <div v-show="!content5Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Error Validation Using --&gt;
&lt;div class="t-fields required" data-field="input" data-validation="error"&gt;
    &lt;label for="name"&gt;Name (Error)&lt;/label&gt;
    &lt;input type="text" id="name" placeholder="Add a name..." value="It's a wrong type name."&gt;
    &lt;span class="_description" data-message="Alert hint message."&gt;Description area&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Success Validation Using --&gt;
&lt;div class="t-fields required success" data-field="input" data-validation="success"&gt;
    &lt;label for="name"&gt;Name (Success)&lt;/label&gt;
    &lt;input type="text" id="name" placeholder="Add a name..." value="It's a good name."&gt;
    &lt;span class="_description" data-message="Good hint message."&gt;Description area&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Warning Validation Using --&gt;
&lt;div class="t-fields required warning" data-field="input" data-validation="warning"&gt;
    &lt;label for="name"&gt;Name (Warning)&lt;/label&gt;
    &lt;input type="text" id="name" placeholder="Add a name..." value="We are hiring!"&gt;
    &lt;span class="_description" data-message="Good hint message."&gt;Description area&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <p>We have 3 option for validations for now. By the way we supported this validation structure all fields. If you want use in select field. You can use. You need should just add data-validation.</p>
            <table>
                <thead>
                    <tr>
                        <th>Validation Type</th>
                        <th align="center">Codes</th>
                        <th>Theme</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Error</td>
                        <td align="center">error</td>
                        <td>Red</td>
                    </tr>
                    <tr>
                        <td>Success</td>
                        <td align="center">success</td>
                        <td>Green</td>
                    </tr>
                    <tr>
                        <td>Warning</td>
                        <td align="center">warning</td>
                        <td>Yellow</td>
                    </tr>
                </tbody>
            </table>

            <h2 class="page-link" id="input-link">Input</h2>
            <p>We developed a new input field structure. It's has a data attributes and styling operators. No more, different types. If you create a new input field. Firstly you need to read Fields Structure in Fields Contains. We added input instead of <span class="-bg">~field_area~</span> in Basic Usage.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content6Tab=true" :class="{'active': content6Tab}">Preview</span>
                    <span @click="content6Tab=false" :class="{'active': !content6Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content6Tab">
                        <div class="t-fields" data-field="input">
                            <label for="title">With Label and Description</label>
                            <input type="text" id="title" placeholder="Daily News Brief">
                            <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div>
                    <div v-show="!content6Tab">
                        <pre v-highlightjs><code class="html">&lt;div class="t-fields" data-field="input"&gt;
    &lt;label for="title"&gt;With Label and Description&lt;/label&gt;
    &lt;input type="text" id="title" placeholder="Daily News Brief"&gt;
    &lt;span class="_description"&gt;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <blockquote style="margin-top: 15px !important;">If you don't want use any property in input field remove related nodes directly.</blockquote>
            <div style="height: 25px;display: block;"></div>
            <strong>Basic Usage</strong>
            <div style="height: 10px;display: block;"></div>
            <pre v-highlightjs><code class="html">&lt;div class="t-fields" data-field="input"&gt;
    &lt;input type="text" placeholder="Just Input"&gt;
&lt;/div&gt;</code></pre>
            <strong>Iconic Usage</strong>
            <p>We created iconic style for input fields. If you want using a icon in input you just adding a <span class="-bg">i</span> node and <span class="-bg">data-position</span> attribute. If you want using fontawesome icon you should add fontawesome element inside to parent <span class="-bg">i</span> node.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content8Tab=true" :class="{'active': content8Tab}">Preview</span>
                    <span @click="content8Tab=false" :class="{'active': !content8Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content8Tab">
                        <div class="t-fields" data-field="input">
                            <label for="title-997">With Icon and Label (Custom Icon)</label>
                            <div class="iconic" data-position="left">
                                <i> <i class="icon-t"></i> </i>
                                <input type="text" id="title-997" placeholder="Daily News Brief">
                            </div>
                        </div>
                        <div class="clear" style="height: 15px;"></div>
                        <div class="t-fields" data-field="input">
                            <label for="title-998">With Icon and Label (Font Awesome Icon)</label>
                            <div class="iconic" data-position="left">
                                <i> <i class="fa fa-heart"></i> </i>
                                <input type="text" id="title-998" placeholder="Daily News Brief">
                            </div>
                        </div>
                        <div class="clear" style="height: 15px;"></div>
                        <div class="t-fields" data-field="input">
                            <label for="title-999">With Icon and Label (Font Awesome Icon) - Colored (Right)</label>
                            <div class="iconic" data-position="right">
                                <i style="color: red;"> <i class="fa fa-heart"></i> </i>
                                <input type="text" id="title-999" placeholder="Daily News Brief">
                            </div>
                        </div>
                    </div>
                    <div v-show="!content8Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Custom Icon Using --&gt;
&lt;div class="t-fields" data-field="input"&gt;
    &lt;label for="title-997"&gt;With Icon and Label (Custom Icon)&lt;/label&gt;
    &lt;div class="iconic" data-position="left"&gt;
        &lt;i&gt; &lt;i class="icon-t"&gt;&lt;/i&gt; &lt;/i&gt;
        &lt;input type="text" id="title-997" placeholder="Daily News Brief"&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Font Awesome Icon Using --&gt;
&lt;div class="t-fields" data-field="input"&gt;
    &lt;label for="title-998"&gt;With Icon and Label (Font Awesome Icon)&lt;/label&gt;
    &lt;div class="iconic" data-position="left"&gt;
        &lt;i&gt; &lt;i class="fa fa-heart"&gt;&lt;/i&gt; &lt;/i&gt;
        &lt;input type="text" id="title-998" placeholder="Daily News Brief"&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Colored Font Awesome Icon Using (Right) --&gt;
&lt;div class="t-fields" data-field="input"&gt;
    &lt;label for="title-999"&gt;With Icon and Label (Font Awesome Icon) - Colored&lt;/label&gt;
    &lt;div class="iconic" data-position="right"&gt;
        &lt;i style="color: red;"&gt; &lt;i class="fa fa-heart"&gt;&lt;/i&gt; &lt;/i&gt;
        &lt;input type="text" id="title-999" placeholder="Daily News Brief"&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h2 class="page-link" id="textarea-link">Textarea</h2>
            <p>We developed standart textareas for new kit.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content7Tab=true" :class="{'active': content7Tab}">Preview</span>
                    <span @click="content7Tab=false" :class="{'active': !content7Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content7Tab">
                        <div class="t-fields" data-field="textarea">
                            <textarea name="" id="" placeholder="test" cols="30" rows="10"></textarea>
                        </div>

                        <div style="clear: both;height: 15px;"></div>
                        <div class="t-fields" data-field="textarea">
                            <label for="textarea-label">With Label</label>
                            <textarea name="" id="textarea-label" placeholder="test" cols="30" rows="10"></textarea>
                        </div>

                        <div style="clear: both;height: 15px;"></div>
                        <div class="t-fields" data-field="textarea">
                            <label for="textarea-label-desc">With Label and Description</label>
                            <textarea name="" id="textarea-label-desc" placeholder="test" cols="30" rows="10"></textarea>
                            <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>

                    </div>
                    <div v-show="!content7Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Textarea Single Using --&gt;
&lt;div class="t-fields" data-field="textarea"&gt;
    &lt;textarea name="" id="" placeholder="test" cols="30" rows="10"&gt;&lt;/textarea&gt;
&lt;/div&gt;

&lt;!-- Textarea with Label Using --&gt;
&lt;div class="t-fields" data-field="textarea"&gt;
    &lt;label for="textarea-label"&gt;With Label&lt;/label&gt;
    &lt;textarea name="" id="textarea-label" placeholder="test" cols="30" rows="10"&gt;&lt;/textarea&gt;
&lt;/div&gt;

&lt;!-- Textarea with Description Using --&gt;
&lt;div class="t-fields" data-field="textarea"&gt;
    &lt;label for="textarea-label-desc"&gt;With Label and Description&lt;/label&gt;
    &lt;textarea name="" id="textarea-label-desc" placeholder="test" cols="30" rows="10"&gt;&lt;/textarea&gt;
    &lt;span class="_description"&gt;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <div style="height: 15px;display: block;"></div>
            <strong>Textarea Limitter</strong>
            <p>We developed a limitter style for textareas. If you want show a limitter inside of textarea. You should use textarea field like example. When you click inside of textarea limitter will show directly.</p>
            <p>You want just adding <span class="-bg">limitter-shower</span> element inside of this field and create a parent node for textarea input. It's <span class="-bg">limitter</span>.</p>

            <div class="toggle">
                <div class="titles">
                    <span @click="content9Tab=true" :class="{'active': content9Tab}">Preview</span>
                    <span @click="content9Tab=false" :class="{'active': !content9Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content9Tab">
                        <div class="t-fields" data-field="textarea">
                            <label for="textarea-label-limitter">With Limitter</label>
                            <div class="limitter">
                                <textarea name="" id="textarea-label-limitter" placeholder="test" cols="30" rows="10"></textarea>
                                <span class="limitter-shower">23/255</span>
                            </div>
                            <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div>
                    <div v-show="!content9Tab">
                        <pre v-highlightjs><code class="html">&lt;div class="t-fields" data-field="textarea"&gt;
    &lt;label for="textarea-label-limitter"&gt;With Limitter&lt;/label&gt;
    &lt;div class="limitter"&gt;
        &lt;textarea name="" id="textarea-label-limitter" placeholder="test" cols="30" rows="10"&gt;&lt;/textarea&gt;
        &lt;span class="limitter-shower"&gt;23/255&lt;/span&gt;
    &lt;/div&gt;
    &lt;span class="_description"&gt;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h2 class="page-link" id="checkboxes-and-radios-link">Checkboxes and Radios</h2>
            <p>We developed standart checkboxes and radios for new kit.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content10Tab=true" :class="{'active': content10Tab}">Preview</span>
                    <span @click="content10Tab=false" :class="{'active': !content10Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content10Tab">
                        <div class="t-fields" data-field="radio">
                            <input type="radio" id="radio-input" checked>
                            <label for="radio-input">Radio: allows public sociate this design why don't have any radio.</label>
                        </div>
                        <div style="clear: both;height: 4px;"></div>
                        <div class="t-fields" data-field="checkbox">
                            <input type="checkbox" id="checkbox-input">
                            <label for="checkbox-input">Checkbox: allows public sociate this design why don't have any radio.</label>
                        </div>

                        <div style="clear: both;height: 15px;"></div>

                        <div class="t-fields" data-field="radio">
                            <input type="radio" id="radio-input-2" disabled>
                            <label for="radio-input-2">Radio (Disabled)</label>
                        </div>
                        <div style="clear: both;height: 4px;"></div>
                        <div class="t-fields" data-field="checkbox">
                            <input type="checkbox" id="checkbox-input-2" checked disabled>
                            <label for="checkbox-input-2">Checkbox (Disabled)</label>
                        </div>
                    </div>
                    <div v-show="!content10Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Radio Using --&gt;
&lt;div class="t-fields" data-field="radio"&gt;
    &lt;input type="radio" id="radio-input" checked&gt;
    &lt;label for="radio-input"&gt;Radio: allows public sociate this design why don't have any radio.&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Checkbox Using --&gt;
&lt;div class="t-fields" data-field="checkbox"&gt;
    &lt;input type="checkbox" id="checkbox-input"&gt;
    &lt;label for="checkbox-input"&gt;Checkbox: allows public sociate this design why don't have any radio.&lt;/label&gt;
&lt;/div&gt;

&lt;!-- Disabled Usings --&gt;
&lt;div class="t-fields" data-field="radio"&gt;
    &lt;input type="radio" id="radio-input-2" disabled&gt;
    &lt;label for="radio-input-2"&gt;Radio (Disabled)&lt;/label&gt;
&lt;/div&gt;
&lt;div class="t-fields" data-field="checkbox"&gt;
    &lt;input type="checkbox" id="checkbox-input-2" checked disabled&gt;
    &lt;label for="checkbox-input-2"&gt;Checkbox (Disabled)&lt;/label&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h2 class="page-link" id="select-link">Select</h2>
            <p>We created a new select lookside for kit. We used <span class="-bg">multiselect</span> plugin for vuejs. If you want use default select with this kit, that's impossible. You should use <a href="https://vue-multiselect.js.org">multiselect</a> plugin for this structure.</p>
            <strong>Search Property</strong>
            <p>Firstly we developed different search scenarios. Multiselect create a inline search for own structure. But in our projects sometimes we need different types on search scenarios.</p>
            <ol>
                <li>Default(Inline) Search</li>
                <li>Custom Search</li>
            </ol>
            <p>In custom search has a difference inside of component. When create a different search in multiselect component, this component automatically removing placeholder parameter. We created a node for this manipulation.</p>
            <p><span class="-bg">_custom-placeholder</span> parameter has a placeholder style ownself. When you want use a custom search you need add this node.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content11Tab=true" :class="{'active': content11Tab}">Preview</span>
                    <span @click="content11Tab=false" :class="{'active': !content11Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content11Tab">
                        <div class="t-fields" data-field="select">
                            <label>Single Select</label>
                            <multiselect v-model="value" :options="options" :searchable="false"></multiselect>
                        </div>

                        <div style="clear: both;height: 15px;"></div>
                        <div class="t-fields" data-field="select">
                            <label>Single Select with Search</label>
                            <multiselect v-model="value1" :options="options1"></multiselect>
                        </div>

                        <div style="clear: both;height: 15px;"></div>
                        <div class="t-fields" data-field="select">
                            <label>Single Select with Search and Description</label>
                            <multiselect v-model="value1" :options="options1"></multiselect>
                            <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>

                        <div style="clear: both;height: 15px;"></div>
                        <div class="t-fields" data-field="select-searchable">
                            <label>Single Select with Custom Search</label>
                            <multiselect v-model="value2" :options="options2"></multiselect>
                            <span class="_custom-placeholder">Select option</span>
                            <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div>
                    <div v-show="!content11Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Single Select Using --&gt;
&lt;div class="t-fields" data-field="select"&gt;
    &lt;label&gt;Single Select&lt;/label&gt;
    &lt;multiselect v-model="value" :options="options" :searchable="false"&gt;&lt;/multiselect&gt;
&lt;/div&gt;

&lt;!-- Single Select with Search --&gt;
&lt;div class="t-fields" data-field="select"&gt;
    &lt;label&gt;Single Select with Search&lt;/label&gt;
    &lt;multiselect v-model="value1" :options="options1"&gt;&lt;/multiselect&gt;
&lt;/div&gt;

&lt;!-- Single Select with Search and Description --&gt;
&lt;div class="t-fields" data-field="select"&gt;
    &lt;label&gt;Single Select with Search and Description&lt;/label&gt;
    &lt;multiselect v-model="value1" :options="options1"&gt;&lt;/multiselect&gt;
    &lt;span class="_description"&gt;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Single Select with Custom Search --&gt;
&lt;div class="t-fields" data-field="select-searchable"&gt;
    &lt;label&gt;Single Select with Custom Search&lt;/label&gt;
    &lt;multiselect v-model="value2" :options="options2"&gt;&lt;/multiselect&gt;
    &lt;span class="_custom-placeholder"&gt;Select option&lt;/span&gt;
    &lt;span class="_description"&gt;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>
            <div style="height: 15px;display: block;"></div>
            <strong>Iconic Usage</strong>
            <p>We created iconic style for select fields. If you want using a icon in any option you just should use multiselect template structure.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content12Tab=true" :class="{'active': content12Tab}">Preview</span>
                    <span @click="content12Tab=false" :class="{'active': !content12Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content12Tab">
                        <div class="t-fields" data-field="select">
                            <label>Iconic Select</label>
                            <multiselect v-model="value3" :options="options3" track-by="id">
                                <template slot="singleLabel" slot-scope="props">
                                    <div :class="{'_iconic-select': props.option.icon!=''}" :data-position="props.option.position">
                                        <i v-if="props.option.icon!=''" :style="props.option.style" :class="props.option.icon" style="margin-left: 0;"></i>
                                        <span class="option__desc">
                                            <span class="option__title">{{ props.option.label }}</span>
                                        </span>
                                    </div>
                                </template>
                                <template slot="option" slot-scope="props">
                                    <div :class="{'_iconic-select': props.option.icon!=''}" :data-position="props.option.position">
                                        <span>{{ props.option.label }}</span>
                                        <i v-if="props.option.icon!=''" :style="props.option.style" :class="props.option.icon"></i>
                                    </div>
                                </template>
                            </multiselect>
                        </div>
                        <div class="clear" style="height: 15px;"></div>
                        <div class="t-fields" data-field="select-ajaxsearch">
                            <label>Custom Search With Loading</label>
                            <multiselect v-model="value2" :options="options2"></multiselect>
                            <span class="_custom-placeholder">Select option</span>
                            <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                        <div class="clear" style="height: 15px;"></div>
                        <div class="t-fields" data-field="select-ajaxsearch" data-loading="true">
                            <label>Custom Search With Loading</label>
                            <multiselect v-model="value2" :options="options2"></multiselect>
                            <span class="_custom-placeholder">Select option</span>
                            <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                        </div>
                    </div>
                    <div v-show="!content12Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Iconic Select --&gt;
&lt;div class="t-fields" data-field="select"&gt;
    &lt;label&gt;Iconic Select&lt;/label&gt;
    &lt;multiselect v-model="value3" :options="options3" track-by="id"&gt;
        &lt;template slot="singleLabel" slot-scope="props"&gt;
            &lt;div :class="{'_iconic-select': props.option.icon!=''}" :data-position="props.option.position"&gt;
                &lt;i v-if="props.option.icon!=''" :style="props.option.style" :class="props.option.icon" style="margin-left: 0;"&gt;&lt;/i&gt;
                &lt;span class="option__desc"&gt;
                    &lt;span class="option__title"&gt;'{ props.option.label }'&lt;/span&gt;
                &lt;/span&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;template slot="option" slot-scope="props"&gt;
            &lt;div :class="{'_iconic-select': props.option.icon!=''}" :data-position="props.option.position"&gt;
                &lt;span&gt;{ props.option.label }&lt;/span&gt;
                &lt;i v-if="props.option.icon!=''" :style="props.option.style" :class="props.option.icon"&gt;&lt;/i&gt;
            &lt;/div&gt;
        &lt;/template&gt;
    &lt;/multiselect&gt;
&lt;/div&gt;

&lt;!-- Select Ajaxsearch Usage --&gt;
&lt;div class="t-fields" data-field="select-ajaxsearch" data-loading="false"&gt;
    &lt;label&gt;Custom Search With Loading&lt;/label&gt;
    &lt;multiselect v-model="value2" :options="options2"&gt;&lt;/multiselect&gt;
    &lt;span class="_custom-placeholder"&gt;Select option&lt;/span&gt;
    &lt;span class="_description"&gt;Lorem ipsum dolor sit amet consectetur, adipisicing elit.&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>
            <p>When you want ajax searchable select. You should add <span class="-bg">data-field="select-ajaxsearch"</span> attribute and <span class="-bg">data-loading="false"</span> attribute to parent element of select.</p>
            <p>When multiselect go to service you need change <span class="-bg">data-loading</span> attribute to <span class="-bg">true</span>. After that change you will loading spinner inside to select.</p>

            <h2 class="page-link" id="tag-link">Tag</h2>
            <p>We used <span class="-bg">multiselect</span> plugin for vuejs. If you want use default tag with this kit, that's impossible. You should use <a href="https://vue-multiselect.js.org">multiselect</a> plugin for this structure.</p>
            <p>Firstly we developed different search scenarios. Multiselect create a inline search for own structure. But in our projects sometimes we need different types on search scenarios.</p>
            <ol>
                <li>Default(Inline) Search</li>
                <li>Custom Search</li>
            </ol>
            <p>In custom search has a difference inside of component. When create a different search in multiselect component, this component automatically removing placeholder parameter. We created a node for this manipulation.</p>
            <p><span class="-bg">_custom-placeholder</span> parameter has a placeholder style ownself. When you want use a custom search you need add this node.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content11Tab=true" :class="{'active': content11Tab}">Preview</span>
                    <span @click="content11Tab=false" :class="{'active': !content11Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content11Tab">
                        <div class="t-fields required" data-field="tag">
                            <label>Single Tag</label>
                            <multiselect v-model="value5" :options="options5" :multiple="true" :searchable="false" :class="{'_isSelectedAnything': value5!=null&&value5.length!=0}"></multiselect>
                            <span class="_custom-placeholder">Select option</span>
                            <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
                        </div>

                        <div style="clear: both;height: 15px;"></div>
                        <div class="t-fields required" data-field="tag-single">
                            <label>Single Tag with Search</label>
                            <multiselect v-model="value4" :options="options4" :multiple="true"></multiselect>
                            <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
                        </div>

                        <div style="clear: both;height: 15px;"></div>
                        <div class="t-fields required" data-field="tag-searchable">
                            <label>Single Tag with Custom Search</label>
                            <multiselect v-model="value6" :options="options6" :multiple="true" :searchable="true"></multiselect>
                            <span class="_custom-placeholder">Select option</span>
                            <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
                        </div>
                    </div>
                    <div v-show="!content11Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Single Tag --&gt;
&lt;div class="t-fields required" data-field="tag"&gt;
    &lt;label&gt;Single Tag&lt;/label&gt;
    &lt;multiselect v-model="value5" :options="options5" :multiple="true" :searchable="false" :class="{'_isSelectedAnything': value5!=null&&value5.length!=0}"&gt;&lt;/multiselect&gt;
    &lt;span class="_custom-placeholder"&gt;Select option&lt;/span&gt;
    &lt;span class="_description" data-message="This is an error message."&gt;Hi! What's up? We developed validations on tag component.&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Single Tag with Search --&gt;
&lt;div class="t-fields required" data-field="tag-single"&gt;
    &lt;label&gt;Single Tag with Search&lt;/label&gt;
    &lt;multiselect v-model="value4" :options="options4" :multiple="true"&gt;&lt;/multiselect&gt;
    &lt;span class="_description" data-message="This is an error message."&gt;Hi! What's up? We developed validations on tag component.&lt;/span&gt;
&lt;/div&gt;

&lt;!-- Single Tag with Custom Search --&gt;
&lt;div class="t-fields required" data-field="tag-searchable"&gt;
    &lt;label&gt;Single Tag with Custom Search&lt;/label&gt;
    &lt;multiselect v-model="value6" :options="options6" :multiple="true" :searchable="true"&gt;&lt;/multiselect&gt;
    &lt;span class="_custom-placeholder"&gt;Select option&lt;/span&gt;
    &lt;span class="_description" data-message="This is an error message."&gt;Hi! What's up? We developed validations on tag component.&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <div style="height: 25px;display: block;"></div>
            <strong>Minimalist Tag</strong>
            <p>We are need a minimalist tag component for smaller areas like sidebar. In this reason we created minimalist tag component. This component create a smaller view for users.</p>

            <div class="toggle">
                <div class="titles">
                    <span @click="content12Tab=true" :class="{'active': content12Tab}">Preview</span>
                    <span @click="content12Tab=false" :class="{'active': !content12Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content12Tab">
                        <div class="t-fields minimal" data-field="tag-single">
                            <label>Single Tag Minimal</label>
                            <multiselect v-model="value4" :options="options4" :multiple="true"></multiselect>
                            <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
                        </div>
                    </div>
                    <div v-show="!content12Tab">
                        <pre v-highlightjs><code class="html">&lt;div class="t-fields minimal" data-field="tag-single"&gt;
    &lt;label&gt;Single Tag Minimal&lt;/label&gt;
    &lt;multiselect v-model="value4" :options="options4" :multiple="true"&gt;&lt;/multiselect&gt;
    &lt;span class="_description" data-message="This is an error message."&gt;Hi! What's up? We developed validations on tag component.&lt;/span&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h2 class="page-link" id="date-time-picker-link">Date & Time Picker</h2>
            <p>We created a new datepicker lookside for kit. We used <span class="-bg">VCalendar</span> plugin for vuejs. If you want use default select with this kit, that's impossible. You should use <a href="https://vcalendar.io">vcalendar</a> plugin for this structure.</p>

            <div class="toggle">
                <div class="titles">
                    <span @click="content13Tab=true" :class="{'active': content13Tab}">Preview</span>
                    <span @click="content13Tab=false" :class="{'active': !content13Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content13Tab">
                        <div class="t-fields" data-field="date">
                            <label>Date</label>
                            <v-date-picker mode='single' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'></v-date-picker>
                        </div>

                        <div class="clear" style="height: 15px;"></div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="t-fields" data-field="select">
                                    <label>Time</label>
                                    <multiselect v-model="value" :options="hours" :searchable="false" :placeholder="'Select Hour'"></multiselect>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="t-fields" data-field="select">
                                    <label>&nbsp;</label>
                                    <multiselect v-model="value" :options="minutes" :searchable="false" :placeholder="'Select Minute'"></multiselect>
                                </div>
                            </div>
                        </div>

                        <div class="clear" style="height: 15px;"></div>
                        <div class="row">
                            <div class="col-md-9">
                                <div class="t-fields" data-field="date">
                                    <label>Date Time</label>
                                    <v-date-picker mode='single' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'></v-date-picker>
                                </div>
                            </div>
                            <div class="col" style="padding: 0;">
                                <div class="t-fields" data-field="select">
                                    <label>&nbsp;</label>
                                    <multiselect v-model="value" :options="hours" :searchable="false" :placeholder="'Select Hour'"></multiselect>
                                </div>
                            </div>
                            <div class="col">
                                <div class="t-fields" data-field="select">
                                    <label>&nbsp;</label>
                                    <multiselect v-model="value" :options="minutes" :searchable="false" :placeholder="'Select Minute'"></multiselect>
                                </div>
                            </div>
                        </div>

                        <div class="clear" style="height: 15px;"></div>
                        <div class="t-fields" data-field="date">
                            <label>Multiple Date</label>
                            <v-date-picker mode='multiple' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'></v-date-picker>
                        </div>

                        <div class="clear" style="height: 15px;"></div>
                        <div class="t-fields" data-field="date">
                            <label>Between Date (Range Mode)</label>
                            <v-date-picker mode='range' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'></v-date-picker>
                        </div>
                    </div>
                    <div v-show="!content13Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Datepicker --&gt;
&lt;div class="t-fields" data-field="date"&gt;
    &lt;label&gt;Date&lt;/label&gt;
    &lt;v-date-picker mode='single' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'&gt;&lt;/v-date-picker&gt;
&lt;/div&gt;

&lt;!-- Timepicker --&gt;
&lt;div class="row"&gt;
    &lt;div class="col-md-6"&gt;
        &lt;div class="t-fields" data-field="select"&gt;
            &lt;label&gt;Time&lt;/label&gt;
            &lt;multiselect v-model="value" :options="hours" :searchable="false" :placeholder="'Select Hour'"&gt;&lt;/multiselect&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-md-6"&gt;
        &lt;div class="t-fields" data-field="select"&gt;
            &lt;label&gt;&nbsp;&lt;/label&gt;
            &lt;multiselect v-model="value" :options="minutes" :searchable="false" :placeholder="'Select Minute'"&gt;&lt;/multiselect&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Datetime Picker --&gt;
&lt;div class="row"&gt;
    &lt;div class="col-md-9"&gt;
        &lt;div class="t-fields" data-field="date"&gt;
            &lt;label&gt;Date Time&lt;/label&gt;
            &lt;v-date-picker mode='single' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'&gt;&lt;/v-date-picker&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col" style="padding: 0;"&gt;
        &lt;div class="t-fields" data-field="select"&gt;
            &lt;label&gt;&nbsp;&lt;/label&gt;
            &lt;multiselect v-model="value" :options="hours" :searchable="false" :placeholder="'Select Hour'"&gt;&lt;/multiselect&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col"&gt;
        &lt;div class="t-fields" data-field="select"&gt;
            &lt;label&gt;&nbsp;&lt;/label&gt;
            &lt;multiselect v-model="value" :options="minutes" :searchable="false" :placeholder="'Select Minute'"&gt;&lt;/multiselect&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Multiple Date Choose --&gt;
&lt;div class="t-fields" data-field="date"&gt;
    &lt;label&gt;Multiple Date&lt;/label&gt;
    &lt;v-date-picker mode='multiple' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'&gt;&lt;/v-date-picker&gt;
&lt;/div&gt;

&lt;!-- Range Mode --&gt;
&lt;div class="t-fields" data-field="date"&gt;
    &lt;label&gt;Between Date (Range Mode)&lt;/label&gt;
    &lt;v-date-picker mode='range' popoverDirection="top" :max-date='new Date()' v-model='captureDateSelected'&gt;&lt;/v-date-picker&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h1 class="page-link" id="buttons-link">Buttons</h1>
            <p>Buttons most important part for a kit. We was need a different lookside for all badges and buttons for kit.</p>
            <p>We created a new button and badge style guide work with color palette. So when you want use a badge anytime you can use color palette colors. In this way you will create your style guide in your interfaces. (w/ product designer) </p>
            <p>This kit will create a new extreme usabilities for your products. If you want using dropdown, you can use button classes. If you want use anything in this kit - you could create a your mix in any element.</p>
            <h2 class="page-link" id="button-link">Button</h2>
            <p>We created 5 button style our kit. When you want use a button you should use like example. We created default, colored, success, error and dark buttons.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content14Tab=true" :class="{'active': content14Tab}">Preview</span>
                    <span @click="content14Tab=false" :class="{'active': !content14Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content14Tab">
                        <div class="row">
                            <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Default</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <button class="t-buttons button default">Default</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button default -hover">Hover </button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button default -active">Active</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button default -disabled">Disabled</button>
                            </div>
                            <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Colored</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <button class="t-buttons button colored">Colored</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button colored -hover">Hover </button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button colored -active">Active</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button colored -disabled">Disabled</button>
                            </div>
                            <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Success</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <button class="t-buttons button success">Success</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button success -hover">Hover </button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button success -active">Active</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button success -disabled">Disabled</button>
                            </div>
                            <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Error</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <button class="t-buttons button error">Error</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button error -hover">Hover </button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button error -active">Active</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button error -disabled">Disabled</button>
                            </div>
                            <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Dark</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <button class="t-buttons button dark">Dark</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button dark -hover">Hover </button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button dark -active">Active</button>
                                <div class="clear" style="height: 4px;"></div>
                                <button class="t-buttons button dark -disabled">Disabled</button>
                            </div>
                        </div>
                    </div>
                    <div v-show="!content14Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Default Button Usage --&gt;
&lt;button class="t-buttons button default"&gt;Default&lt;/button&gt;
&lt;button class="t-buttons button default -hover"&gt;Hover&lt;/button&gt;
&lt;button class="t-buttons button default -active"&gt;Active&lt;/button&gt;
&lt;button class="t-buttons button default -disabled"&gt;Disabled&lt;/button&gt;

&lt;!-- Colored Button Usage --&gt;
&lt;button class="t-buttons button colored"&gt;Default&lt;/button&gt;
&lt;button class="t-buttons button colored -hover"&gt;Hover&lt;/button&gt;
&lt;button class="t-buttons button colored -active"&gt;Active&lt;/button&gt;
&lt;button class="t-buttons button colored -disabled"&gt;Disabled&lt;/button&gt;

&lt;!-- Success Button Usage --&gt;
&lt;button class="t-buttons button success"&gt;Default&lt;/button&gt;
&lt;button class="t-buttons button success -hover"&gt;Hover&lt;/button&gt;
&lt;button class="t-buttons button success -active"&gt;Active&lt;/button&gt;
&lt;button class="t-buttons button success -disabled"&gt;Disabled&lt;/button&gt;

&lt;!-- Error Button Usage --&gt;
&lt;button class="t-buttons button error"&gt;Default&lt;/button&gt;
&lt;button class="t-buttons button error -hover"&gt;Hover&lt;/button&gt;
&lt;button class="t-buttons button error -active"&gt;Active&lt;/button&gt;
&lt;button class="t-buttons button error -disabled"&gt;Disabled&lt;/button&gt;

&lt;!-- Dark Button Usage --&gt;
&lt;button class="t-buttons button dark"&gt;Default&lt;/button&gt;
&lt;button class="t-buttons button dark -hover"&gt;Hover&lt;/button&gt;
&lt;button class="t-buttons button dark -active"&gt;Active&lt;/button&gt;
&lt;button class="t-buttons button dark -disabled"&gt;Disabled&lt;/button&gt;</code></pre>
                    </div>
                </div>
            </div>
            <p><span class="-bg">-f</span> property created for usage full width elements. If you want use full width element you need add class inside of button. You can show a example in dropdown structure or badge structure.</p>
            <strong id="Statements">Statements</strong>
            <p>If you want use a button statements as class you need just add statements classes.</p>

            <div style="clear: both;display: block;height: 0px;"></div>

            <strong id="multiple-buttons">Multiple Buttons</strong>
            <p>If you want use multiple buttons you are need border-radius settings for some buttons. You should use '-list' class for parent node.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content16Tab=true" :class="{'active': content16Tab}">Preview</span>
                    <span @click="content16Tab=false" :class="{'active': !content16Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content16Tab">
                        <div class="row">
                            <div class="col-md-3" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Dropdown</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <div class="-list">
                                    <button class="t-buttons button default">All</button>
                                    <button class="t-buttons button default -hover">Cat 1</button>
                                    <button class="t-buttons button default">Cat 2</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="!content16Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- List Buttons Usage --&gt;
&lt;div class="-list"&gt;
    &lt;button class="t-buttons button default"&gt;All&lt;/button&gt;
    &lt;button class="t-buttons button default -hover"&gt;Cat 1&lt;/button&gt;
    &lt;button class="t-buttons button default"&gt;Cat 2&lt;/button&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>

            <div style="clear: both;display: block;height: 15px;"></div>

            <strong>Dropdown</strong>
            <p>If you want use a dropdown with kit styles. You can use all buttons like a dropdown. We are showing just 2 style in example (Default and Dark).</p>
            <p>Firstly we are need a dropdown list. We created a <span class="-bg">ul</span> node for dropdown list. After that when you add active class to dropdown. Automatically dropdown list will show. </p>
            <p></p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content15Tab=true" :class="{'active': content15Tab}">Preview</span>
                    <span @click="content15Tab=false" :class="{'active': !content15Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content15Tab">
                        <div class="row">
                            <div class="col-md-3" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Dropdown</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <button class="t-buttons button default -dropdown -f" @click="dropDown=!dropDown" :class="{'active': dropDown}">
                                    With Dropdown
                                    <ul>
                                        <li>Save</li>
                                        <li>Edit</li>
                                        <li>Get</li>
                                        <li>Delete</li>
                                    </ul>
                                </button>
                            </div>
                            <div class="col-md-3" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                                <strong>Dropdown (Dark)</strong>
                                <div style="clear: both; height: 8px;"></div>
                                <button class="t-buttons button dark -dropdown" @click="dropDownDark=!dropDownDark" :class="{'active': dropDownDark}">
                                    With Dropdown
                                    <ul>
                                        <li>Save</li>
                                        <li>Edit</li>
                                        <li>Delete</li>
                                    </ul>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-show="!content15Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Dropdown Usage --&gt;
&lt;button class="t-buttons button default -dropdown" @click="dropDown=!dropDown" :class="{'active': dropDown}"&gt;
    With Dropdown
    &lt;ul&gt;
        &lt;li&gt;Save&lt;/li&gt;
        &lt;li&gt;Edit&lt;/li&gt;
        &lt;li&gt;Get&lt;/li&gt;
        &lt;li&gt;Delete&lt;/li&gt;
    &lt;/ul&gt;
&lt;/button&gt;

&lt;!-- Dropdown Usage (Dark) --&gt;
&lt;button class="t-buttons button default -dropdown dark" @click="dropDown=!dropDown" :class="{'active': dropDown}"&gt;
    With Dropdown
    &lt;ul&gt;
        &lt;li&gt;Save&lt;/li&gt;
        &lt;li&gt;Edit&lt;/li&gt;
        &lt;li&gt;Get&lt;/li&gt;
        &lt;li&gt;Delete&lt;/li&gt;
    &lt;/ul&gt;
&lt;/button&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h2 class="page-link" id="badge-link">Badge</h2>
            <p>Kit badges work with color palette. When you want use any badge about any status. You need find a color for your badge in
                <a href="#colors-link">color palette</a>. After your choice you should use color classes like example.</p>
            <p>We created <span class="-bg">-f</span> property for badges too.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content16Tab=true" :class="{'active': content16Tab}">Preview</span>
                    <span @click="content16Tab=false" :class="{'active': !content16Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content16Tab">
                        <div class="row">
                            <div class="col-md-4">
                                <span class="t-buttons badge badge-turquoise-dark">Badge Formula (bg color-lighter / label color-dark)</span>
                            </div>
                            <div class="col-md-4">
                                <span class="t-buttons badge badge-green-dark">Badge Formula (bg color-lighter / label color-dark)</span>
                            </div>
                            <div class="col-md-4">
                                <span class="t-buttons badge badge-blue-dark -f">Badge Formula (bg color-lighter / label color-dark)</span>
                            </div>
                        </div>
                    </div>
                    <div v-show="!content16Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Structure--&gt;
&lt;span class="t-buttons badge badge-{color_code}"&gt;{your_badge_text}&lt;/span&gt;

&lt;!-- Normally Usage --&gt;
&lt;span class="t-buttons badge badge-turquoise-dark"&gt;Badge Formula (bg color-lighter / label color-dark)&lt;/span&gt;


&lt;!-- Full Width Usage --&gt;
&lt;span class="t-buttons badge badge-blue-dark -f"&gt;Badge Formula (bg color-lighter / label color-dark)&lt;/span&gt;</code></pre>
                    </div>
                </div>
            </div>

            <h1 class="page-link" id="card-link">Card</h1>
            <p>We created a card structure for all kit areas. We created <span class="-bg">-s</span> and <span class="-bg">-dark</span> properties for all cards. If you used <span class="-bg">-s</span> automatically your card show with shadow.</p>
            <p>If you want use dark card on any interface you should use <span class="-bg">-dark</span> class in classes of card.</p>
            <div class="toggle">
                <div class="titles">
                    <span @click="content17Tab=true" :class="{'active': content17Tab}">Preview</span>
                    <span @click="content17Tab=false" :class="{'active': !content17Tab}">Code</span>
                </div>
                <div class="contents">
                    <div class="content-asider" v-show="content17Tab" style="background: #f5f7fa">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="t-card bg-white">
                                    <strong class="card-title">White Standart Card and Title Style</strong>
                                    <strong class="card-subtitle">Sub Title</strong>
                                    <hr>
                                    <p class="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet corporis deserunt facere incidunt libero, molestiae obcaecati placeat praesentium provident repudiandae rerum suscipit ut veniam voluptate, voluptatibus. Animi, ipsa.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="t-card bg-white -s">
                                    <strong class="card-title">White Standart Card with Shadow</strong>
                                    <strong class="card-subtitle">Sub Title</strong>
                                    <hr>
                                    <p class="card-paragraph">We created a new card structure this areas and plusing shadows.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="t-card bg-ink -dark">
                                    <strong class="card-title">Dark</strong>
                                    <strong class="card-subtitle">Sub Title</strong>
                                    <hr>
                                    <p class="card-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet corporis deserunt facere incidunt libero, molestiae obcaecati placeat praesentium provident repudiandae rerum suscipit ut veniam voluptate, voluptatibus. Animi, ipsa.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="!content17Tab">
                        <pre v-highlightjs><code class="html">&lt;!-- Normally Usage --&gt;
&lt;div class="t-card bg-white"&gt;
    &lt;strong class="card-title"&gt;White Standart Card and Title Style&lt;/strong&gt;
    &lt;strong class="card-subtitle"&gt;Sub Title&lt;/strong&gt;
    &lt;hr&gt;
    &lt;p class="card-paragraph"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet corporis deserunt facere incidunt libero, molestiae obcaecati placeat praesentium provident repudiandae rerum suscipit ut veniam voluptate, voluptatibus. Animi, ipsa.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Shadow Usage --&gt;
&lt;div class="t-card bg-white -s"&gt;
    &lt;strong class="card-title"&gt;White Standart Card with Shadow&lt;/strong&gt;
    &lt;strong class="card-subtitle"&gt;Sub Title&lt;/strong&gt;
    &lt;hr&gt;
    &lt;p class="card-paragraph"&gt;We created a new card structure this areas and plusing shadows.&lt;/p&gt;
&lt;/div&gt;

&lt;!-- Dark Usage --&gt;
&lt;div class="t-card bg-ink -dark"&gt;
    &lt;strong class="card-title"&gt;Dark&lt;/strong&gt;
    &lt;strong class="card-subtitle"&gt;Sub Title&lt;/strong&gt;
    &lt;hr&gt;
    &lt;p class="card-paragraph"&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet corporis deserunt facere incidunt libero, molestiae obcaecati placeat praesentium provident repudiandae rerum suscipit ut veniam voluptate, voluptatibus. Animi, ipsa.&lt;/p&gt;
&lt;/div&gt;</code></pre>
                    </div>
                </div>
            </div>
            <h1 class="page-link" id="credits-link">Credits</h1>
            <p>2018 December.</p>
            <h1 class="page-link" id="credits-link">Updates</h1>
            <p>
                <ul>
                    <li>added <a href="#multiple-buttons">multiple buttons support</a></li>
                    <li>created different classes for all button statements <a href="#Statements">(hover, focus etc.)</a></li>
                </ul>
            </p>
            <div class="clear" style="height: 25px"></div>
        </div>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import hljs from 'highlight.js'
import Vue from 'vue'
Vue.directive('highlightjs', {
  deep: true,
  bind: function (el, binding) {
    // on first bind, highlight all targets
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      // if a value is directly assigned to the directive, use this
      // instead of the element content.
      if (binding.value) {
        target.textContent = binding.value
      }
      hljs.highlightBlock(target)
    })
  },
  componentUpdated: function (el, binding) {
    // after an update, re-fill the content and then highlight
    let targets = el.querySelectorAll('code')
    targets.forEach((target) => {
      if (binding.value) {
        target.textContent = binding.value
        hljs.highlightBlock(target)
      }
    })
  }
})
import Multiselect from 'vue-multiselect'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

Vue.use(VCalendar, {
  firstDayOfWeek: 2,  // Monday
});
export default {
    name: 'app',
    components: {
        Multiselect,
        // HelloWorld
    },
    data() {
        return {
            captureDateSelected: undefined,
            captureDateSelected2: {
                start: new Date(2018, 11, 9),
                end: new Date(2018, 11, 18)
            },
            dropDown: false,
            dropDownDark: false,
            value: null,
            options: ['list', 'of', 'options'],
            value1: null,
            options1: ['list', 'of', 'options'],
            value2: null,
            options2: ['list', 'of', 'options'],
            value3: null,
            options3: [
                {id: "1", label: "Left Custom Icon", icon: "icon-t", position: "left", style: {backgroundColor: 'red'}},
                {id: "2", label: "Right Custom Icon", icon: "icon-t", position: "right", style: {backgroundColor: '#0072CE'}},
                {id: "3", label: "Without Icon", icon: "", position: "", style: {backgroundColor: ''}},
                {id: "4", label: "Left Font Awesome Icon", icon: "far fa-umbrella", position: "left", style: {color: '#FFB489'}},
                {id: "5", label: "Right Font Awesome Icon", icon: "far fa-umbrella", position: "right", style: {color: '#003332'}}
            ],
            value3_: null,
            options3_: [
                {id: "1", label: "Left Custom Icon", icon: "icon-t", position: "left", style: {backgroundColor: 'red'}},
                {id: "2", label: "Right Custom Icon", icon: "icon-t", position: "right", style: {backgroundColor: '#0072CE'}},
                {id: "3", label: "Without Icon", icon: "", position: "", style: {backgroundColor: ''}},
                {id: "4", label: "Left Font Awesome Icon", icon: "far fa-umbrella", position: "left", style: {color: '#FFB489'}},
                {id: "5", label: "Right Font Awesome Icon", icon: "far fa-umbrella", position: "right", style: {color: '#003332'}}
            ],
            value4: null,
            options4: ['list', 'of', 'options'],
            value5: null,
            options5: ['list', 'of', 'options'],
            value6: null,
            options6: ["Adana","Adiyaman","Afyon","Agri","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydin","Balikesir","Bartin","Batman","Bayburt","Bilecik","Bingol","Bitlis","Bolu","Burdur","Bursa","Canakkale","Cankiri","Corum","Denizli","Diyarbakir","Duzce","Edirne","Elazig","Erzincan","Erzurum","Eskisehir","Gaziantep","Giresun","Gumushane","Hakkari","Hatay","Igdir","Isparta","Istanbul","Izmir","Kahramanmaras","Karabuk","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kirikkale","Kirklareli","Kirsehir","Kocaeli","Konya","Kutahya","Malatya","Manisa","Mardin","Mersin","Mugla","Mus","Nevsehir","Nigde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Sanliurfa","Siirt","Sinop","Sirnak","Sivas","Tekirdag","Tokat","Trabzon","Tunceli","Usak","Van","Yalova","Yozgat","Zonguldak"],
            options7: ['list', 'of', 'options'],
            value7: null,
            hours: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
            minutes: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
            content1Tab: true,
            content2Tab: true,
            content3Tab: true,
            content4Tab: true,
            content5Tab: true,
            content6Tab: true,
            content7Tab: true,
            content8Tab: true,
            content9Tab: true,
            content10Tab: true,
            content11Tab: true,
            content12Tab: true,
            content13Tab: true,
            content14Tab: true,
            content15Tab: true,
            content16Tab: true,
            content17Tab: true,
            content18Tab: true
        }
    },
    mounted: function() {
        let links = document.querySelectorAll('.navigation a');
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", function () {
                for (let j = 0; j < links.length; j++) {
                    links[j].classList.remove('active');
                }
                links[i].classList.add('active');
            })
        }
        window.addEventListener("scroll", function (evt) {
            var doc = document.documentElement;
            var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
            var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

            if (top < 30) {
                let links = document.querySelectorAll('.navigation a');
                for (let j = 0; j < links.length; j++) {
                    links[j].classList.remove('active');
                }
                links[0].classList.add('active');
            }

            var elements = document.querySelectorAll('.page-link');
            let arr = [];
            for (let i = 0; i < elements.length; i++) {
                var topPos = elements[i].getBoundingClientRect().top + window.scrollY;
                if (topPos <= top) {
                    arr.push(elements[i].innerHTML.toString());
                }
            }

            let current = arr[arr.length-1].toLowerCase().replace(/ /g, '-') + "-link";

            let links = document.querySelectorAll('.navigation a');
            console.log(current);
            for (let i = 0; i < links.length; i++) {
                if (current == links[i].getAttribute("href").replace(/#/g, '')) {
                    for (let j = 0; j < links.length; j++) {
                        links[j].classList.remove('active');
                    }
                    links[i].classList.add('active');
                }
            }

        })
    }
}
</script>

<style lang="scss">

    // Fonts
    @import url('https://unpkg.com/vue-multiselect@2.1.0/dist/vue-multiselect.min.css');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css');
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,200,300,400,500,600,700&subset=latin-ext');
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/monokai-sublime.min.css');


    // Common
    @import './assets/_colors';
    @import './assets/_grid';
    @import './assets/_mixins';
    @import './assets/_elements';
    @import './assets/variables';
    @import './assets/x';

</style>
