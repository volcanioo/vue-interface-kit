<template>
    <div>

        <!-- Inputs -->
        <div class="container">
            <h1>Inputs</h1>
            <div class="t-fields" data-field="input">
                <input type="text" placeholder="Just Input">
            </div>

            <div style="clear: both;height: 15px;"></div>
            <div class="t-fields" data-field="input">
                <label for="title">With Label</label>
                <input type="text" id="title" placeholder="Daily News Brief">
            </div>

            <div style="clear: both;height: 15px;"></div>
            <div class="t-fields" data-field="input">
                <label for="title">With Icon and Label</label>
                <div class="iconic" data-position="left">
                    <i> <i class="icon-t"></i> </i>
                    <input type="text" id="title" placeholder="Daily News Brief">
                </div>
            </div>

            <div style="clear: both;height: 15px;"></div>
            <div class="t-fields" data-field="input">
                <label for="title">With Label and Description</label>
                <input type="text" id="title" placeholder="Daily News Brief">
                <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
            </div>

            <div style="clear: both;height: 15px;"></div>
            <div class="row">
                <div class="col-md-4">
                    <div class="t-fields required success" data-field="input" data-validation="success">
                        <label for="success-val">Success Validation</label>
                        <input type="text" id="success-val" value="Success">
                        <span class="_description">Success Scenario</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required warning" data-field="input" data-validation="warning">
                        <label for="warning-val">Warning Validation</label>
                        <input type="text" id="warning-val" value="Warning">
                        <span class="_description">Warning Scenario</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required" data-field="input" data-validation="error">
                        <label for="error-val">Error Validation</label>
                        <input type="text" id="error-val" value="Error">
                        <span class="_description" data-message="This is an error message">Error Scenario</span>
                    </div>
                </div>
            </div>

        </div>

        <hr style="margin-top: 35px;opacity: .1" />

        <!-- Textareas -->
        <div class="container">
            <h1>Textareas</h1>
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
            
            <div style="clear: both;height: 15px;"></div>
            <div class="t-fields" data-field="textarea">
                <label for="textarea-label-limitter">With Limitter</label>
                <div class="limitter">
                    <textarea name="" id="textarea-label-limitter" placeholder="test" cols="30" rows="10"></textarea>
                    <span class="limitter-shower">23/255</span>
                </div>
                <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
            </div>

            <div style="clear: both;height: 15px;"></div>
            <div class="row">
                <div class="col-md-4">
                    <div class="t-fields required success" data-field="textarea" data-validation="success">
                        <label for="textarea-success">Success Validation</label>
                        <div class="limitter">
                            <textarea name="" id="textarea-label-success" cols="30" rows="10">Success Textarea</textarea>
                            <span class="limitter-shower">23/255</span>
                        </div>
                        <span class="_description">Success Scenario</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required warning" data-field="textarea" data-validation="warning">
                        <label for="textarea-warning">Warning Validation</label>
                        <div class="limitter">
                            <textarea name="" id="textarea-label-warning" cols="30" rows="10">Success Textarea</textarea>
                            <span class="limitter-shower">189/255</span>
                        </div>
                        <span class="_description">Warning Scenario</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required error" data-field="textarea" data-validation="error">
                        <label for="textarea-error">Error Validation</label>
                        <div class="limitter">
                            <textarea name="" id="textarea-label-error" placeholder="test" cols="30" rows="10">Error Textarea</textarea>
                            <span class="limitter-shower">255/255</span>
                        </div>
                        <span class="_description" data-message="This is an error message.">Error Scenario</span>
                    </div>
                </div>
            </div>

        </div>

        <hr style="margin-top: 35px;opacity: .1" />

        <!-- Checkboxes -->
        <div class="container">
            <h1>Checkboxes and Radios</h1>
            <div class="t-fields" data-field="radio">
                <input type="radio" id="radio-input" checked> 
                <label for="radio-input">Radio: TRT allows public sociate this design why don't have any radio.</label>
            </div>
            <div style="clear: both;height: 4px;"></div>
            <div class="t-fields" data-field="checkbox">
                <input type="checkbox" id="checkbox-input"> 
                <label for="checkbox-input">Checkbox: TRT allows public sociate this design why don't have any radio.</label>
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

        <hr style="margin-top: 35px;opacity: .1" />

        <!-- Selects -->
        <div class="container">
            <h1>Selects</h1>
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

            <div style="clear: both;height: 15px;"></div>
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

            <div style="clear: both;height: 15px;"></div>
            <div class="row">
                <div class="col-md-4">
                    <div class="t-fields required success" data-field="select-searchable" data-validation="success">
                        <label>Select Custom Search (Success Validation)</label>
                        <multiselect v-model="value2" :options="options2"></multiselect>
                        <span class="_custom-placeholder">Select option</span>
                        <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required warning" data-field="select" data-validation="warning">
                        <label>Single Select with Search (Warning Validation)</label>
                        <multiselect v-model="value1" :options="options1"></multiselect>
                        <span class="_description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required error" data-field="select" data-validation="error">
                        <label>Single Select (Error Validation)</label>
                        <multiselect v-model="value2" :options="options2" :searchable="false"></multiselect>
                        <span class="_description" data-message="This is an error message.">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                    </div>
                </div>
            </div>
        </div>

        <hr style="margin-top: 35px;opacity: .1" />

        <!-- Tags -->
        <div class="container">
            <h1>Tags</h1>
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

            <div style="clear: both;height: 15px;"></div>
            <div class="t-fields minimal" data-field="tag-single">
                <label>Single Tag Minimal</label>
                <multiselect v-model="value4" :options="options4" :multiple="true"></multiselect>
                <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
            </div>

            <div style="clear: both;height: 15px;"></div>
            <div class="row">
                <div class="col-md-4">
                    <div class="t-fields required success" data-validation="success" data-field="tag">
                        <label>Single Tag</label>
                        <multiselect v-model="value5" :options="options5" :multiple="true" :searchable="false" :class="{'_isSelectedAnything': value5!=null&&value5.length!=0}"></multiselect>
                        <span class="_custom-placeholder">Select option</span>
                        <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required warning" data-validation="warning" data-field="tag-single">
                        <label>Single Tag with Search</label>
                        <multiselect v-model="value4" :options="options4" :multiple="true"></multiselect>
                        <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t-fields required error" data-validation="error" data-field="tag-searchable">
                        <label>Single Tag with Custom Search</label>
                        <multiselect v-model="value6" :options="options6" :multiple="true" :searchable="true"></multiselect>
                        <span class="_custom-placeholder">Select option</span>
                        <span class="_description" data-message="This is an error message.">Hi! What's up? We developed validations on tag component.</span>
                    </div>
                </div>
            </div>
        </div>

        <hr style="margin-top: 35px;opacity: .1" />
        
        <!-- Date Time Picker -->
        <div class="container">
            <h1>Date & Time Picker</h1>
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

            <div class="clear" style="height: 15px;"></div>
            <div class="t-fields" data-field="date">
                <label>Calendar</label>
                <v-calendar mode='range' v-model='captureDateSelected2' :attributes="{dates: new Date(2018, 1, 1)}" show-caps></v-calendar>
            </div>


        </div>

        <hr style="margin-top: 35px;opacity: .1" />

        <!-- Buttons -->
        <div class="container">
            <h1>Buttons</h1>
            <div class="row">
                <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                    <strong>Default</strong>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button default">Default</button>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button default -f" disabled>Disabled</button>
                </div>
                <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                    <strong>Colored</strong>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button colored">Colored</button>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button colored -f" disabled>Disabled</button>
                </div>
                <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                    <strong>Success</strong>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button success">Success</button>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button success -f" disabled>Disabled</button>
                </div>
                <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                    <strong>Error</strong>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button error">Error</button>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button error -f" disabled>Disabled</button>
                </div>
                <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                    <strong>Dark</strong>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button dark">Dark</button>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button dark -f" disabled>Disabled</button>
                </div>
                <div class="col" style="display: flex;flex-direction: column;align-items: flex-start;justify-content:flex-start;">
                    <strong>Iconic</strong>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button default"> <i class="fa fa-heart" style="color: #FF6A13"></i>&nbsp;&nbsp;Left Icon</button>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button default">Right Icon&nbsp;&nbsp;<i class="fa fa-heart -r" style="color: #FF6A13"></i> </button>
                    <div style="clear: both; height: 8px;"></div>
                    <button class="t-buttons button default"><i class="fa fa-heart -r" style="color: #FF6A13"></i> </button>
                </div>
            </div>
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

        <hr style="margin-top: 35px;opacity: .1" />

        <!-- Badges -->
        <div class="container">
            <h1>Badges</h1>
            <span class="t-buttons badge badge-turquoise-dark">Badge Formula (bg color-lighter / label color-dark)</span>
        </div>

        <div style="clear: both;height: 415px;"></div>
        
    </div>
</template>

<script>
import Vue from "vue";
import Multiselect from "vue-multiselect";
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";

Vue.use(VCalendar, {
  firstDayOfWeek: 2 // Monday
});

export default {
  name: "HelloWorld",
  components: {
    Multiselect
  },
  props: {
    msg: String
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
      options: ["list", "of", "options"],
      value1: null,
      options1: ["list", "of", "options"],
      value2: null,
      options2: ["list", "of", "options"],
      value3: null,
      options3: [
        {
          id: "1",
          label: "Left Custom Icon",
          icon: "icon-t",
          position: "left",
          style: { backgroundColor: "red" }
        },
        {
          id: "2",
          label: "Right Custom Icon",
          icon: "icon-t",
          position: "right",
          style: { backgroundColor: "#0072CE" }
        },
        {
          id: "3",
          label: "Without Icon",
          icon: "",
          position: "",
          style: { backgroundColor: "" }
        },
        {
          id: "4",
          label: "Left Font Awesome Icon",
          icon: "far fa-umbrella",
          position: "left",
          style: { color: "#FFB489" }
        },
        {
          id: "5",
          label: "Right Font Awesome Icon",
          icon: "far fa-umbrella",
          position: "right",
          style: { color: "#003332" }
        }
      ],
      value4: null,
      options4: ["list", "of", "options"],
      value5: null,
      options5: ["list", "of", "options"],
      value6: null,
      options6: [
        "Adana",
        "Adiyaman",
        "Afyon",
        "Agri",
        "Aksaray",
        "Amasya",
        "Ankara",
        "Antalya",
        "Ardahan",
        "Artvin",
        "Aydin",
        "Balikesir",
        "Bartin",
        "Batman",
        "Bayburt",
        "Bilecik",
        "Bingol",
        "Bitlis",
        "Bolu",
        "Burdur",
        "Bursa",
        "Canakkale",
        "Cankiri",
        "Corum",
        "Denizli",
        "Diyarbakir",
        "Duzce",
        "Edirne",
        "Elazig",
        "Erzincan",
        "Erzurum",
        "Eskisehir",
        "Gaziantep",
        "Giresun",
        "Gumushane",
        "Hakkari",
        "Hatay",
        "Igdir",
        "Isparta",
        "Istanbul",
        "Izmir",
        "Kahramanmaras",
        "Karabuk",
        "Karaman",
        "Kars",
        "Kastamonu",
        "Kayseri",
        "Kilis",
        "Kirikkale",
        "Kirklareli",
        "Kirsehir",
        "Kocaeli",
        "Konya",
        "Kutahya",
        "Malatya",
        "Manisa",
        "Mardin",
        "Mersin",
        "Mugla",
        "Mus",
        "Nevsehir",
        "Nigde",
        "Ordu",
        "Osmaniye",
        "Rize",
        "Sakarya",
        "Samsun",
        "Sanliurfa",
        "Siirt",
        "Sinop",
        "Sirnak",
        "Sivas",
        "Tekirdag",
        "Tokat",
        "Trabzon",
        "Tunceli",
        "Usak",
        "Van",
        "Yalova",
        "Yozgat",
        "Zonguldak"
      ],
      options7: ["list", "of", "options"],
      value7: null,
      hours: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
      ],
      minutes: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
      ]
    };
  }
};
</script>
<style scoped lang="scss">
</style>


