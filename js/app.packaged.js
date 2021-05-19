"use strict";$.hood||($.hood={}),$.body=$("body");var console=window.console||{};console.log=console.log||function(){},console.warn=console.warn||function(){},console.error=console.error||function(){},console.info=console.info||function(){},$.fn.exists=function(){return $(this).length},$.fn.doesExist=function(){return $(this).length},$.fn.restrictToSlug=function(e){var t=$(this),o=e||/[^0-9a-zA-Z]*/g,n=function(){var e=$(this).val(),t=e.replace(o,"");e!==t&&$(this).val(t)};t.on("keyup",n),t.on("paste",n),t.on("change",n)},$(".restrict-to-slug").restrictToSlug(),$.fn.restrictToPageSlug=function(e){var t=$(this),o=e||/[^0-9a-zA-Z-//]*/g,n=function(){var e=$(this).val(),t=e.replace(o,"");if((t.match(new RegExp("/","g"))||[]).length>4){var n=t.lastIndexOf("/");t=t.substring(0,n)+t.substring(n+1),$.hood.Alerts.Warning("You can only have up to 4 '/' characters in a url slug.")}e!==t&&$(this).val(t)};t.on("keyup",n),t.on("paste",n),t.on("change",n)},$(".restrict-to-page-slug").restrictToPageSlug(),$.fn.restrictToMetaSlug=function(e){var t=$(this),o=e||/[^0-9a-zA-Z.]*/g,n=function(){var e=$(this).val(),t=e.replace(o,"");if((t.match(new RegExp(".","g"))||[]).length>1){var n=t.lastIndexOf(".");t=t.substring(0,n)+t.substring(n+1),$.hood.Alerts.Warning("You can only have up to 1 '.' characters in a meta slug.")}e!==t&&$(this).val(t)};t.on("keyup",n),t.on("paste",n),t.on("change",n)},$(".restrict-to-meta-slug").restrictToMetaSlug(),$.fn.characterCounter=function(e){var t=$(this),o=function(){var e=$(this).data("counter"),t=Number($(this).attr("maxlength")),o=$(this).val().length;$(e).text(t-o);var n="text-success";t-o<t/10&&(n="text-danger"),$(e).parent().removeClass("text-success").removeClass("text-danger").addClass(n)};t.on("keyup",o),t.on("paste",o),t.on("change",o)},$(".character-counter").characterCounter(),$(".character-counter").trigger("change"),$.fn.addLoader=function(){$(this).data("loadercontent",$(this).html()),$(this).addClass("loading").append('<i class="fa fa-refresh fa-spin m-l-sm"></i>')},$.fn.removeLoader=function(){$(this).empty().html($(this).data("loadercontent")),$(this).removeClass("loading")},$.fn.warningAlert=function(){var e=$(this),t=function(e){e.preventDefault();var t=function(t){if(t){var o=$(e.currentTarget).attr("href");window.location=o}};return $.hood.Alerts.Confirm($(e.currentTarget).data("warning"),$(e.currentTarget).data("title"),t,"warning",$(e.currentTarget).data("footer"),"Ok","Cancel"),!1};e.on("click",t)},$(".warning-alert").warningAlert(),$.commonHeight=function(e,t){var o=0;e.children(t).each(function(){var e=$(this).children();e.hasClass("max-height")?o=e.outerHeight():e.outerHeight()>o&&(o=e.outerHeight())}),e.children(t).each(function(){$(this).height(o)})},$.loadCss=function(e,t){$("link#"+e).length||$("<link/>",{id:e,rel:"stylesheet",type:"text/css",href:t}).appendTo("head")},$.getUrlVars=function(){for(var e,t=[],o=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),n=0;n<o.length;n++)e=o[n].split("="),t.push(e[0]),t[e[0]]=e[1];return t},$.decodeUrl=function(e){return decodeURIComponent(e).replace("+"," ")},$.numberWithCommas=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},$.validator&&($.validator.addMethod("time",function(e,t){return this.optional(t)||/^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/i.test(e)},"Please enter a valid time."),$.validator.addMethod("ukdate",function(e,t){return e.match(/^\d\d?\/\d\d?\/\d\d\d\d$/)},"Please enter a date in the format dd/mm/yyyy.")),$.mobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},Any:function(){return $.mobile.Android()||$.mobile.BlackBerry()||$.mobile.iOS()||$.mobile.Opera()||$.mobile.Windows()}},$.mobile.Android?$.mobile.BlackBerry?$.mobile.iOS?$.mobile.Opera?$.mobile.Windows?($.body.addClass("desktop-device"),$.device="desktop"):($.body.addClass("windows-device"),$.device="windows"):($.body.addClass("opera-device"),$.device="opera"):($.body.addClass("ios-device"),$.device="ios"):($.body.addClass("blackberry-device"),$.device="blackberry"):($.body.addClass("android-device"),$.device="android"),function(){var e={password:"0",username:"0"};$("body").on("change",".prevent-autocomplete",function(t){var o=$(this).attr("id");"0"!==e[o]&&e[o]===$(this).val()||$(this).val("")}),$("body").on("keyup",".prevent-autocomplete",function(t){var o=$(this).attr("id");e[o]=$(this).val()})}(),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e}(),$.hood.LinkClasses=[{title:"None",value:""},{title:"Button link",value:"btn btn-default"},{title:"Theme coloured button link",value:"btn btn-primary"},{title:"Popup image/video",value:"colorbox-iframe"},{title:"Button popup link",value:"btn btn-default colorbox-iframe"},{title:"Theme coloured button popup link",value:"btn btn-primary colorbox-iframe"},{title:"Large link",value:"font-lg"},{title:"Large button link",value:"btn btn-default btn-lg"},{title:"Large theme coloured button link",value:"btn btn-primary btn-lg"},{title:"Large popup image/video",value:"font-lg colorbox-iframe"},{title:"Large Button popup link",value:"btn btn-default btn-lg colorbox-iframe"},{title:"Theme coloured button popup link",value:"btn btn-primary btn-lg colorbox-iframe"}],$.hood.ImageClasses=[{title:"None",value:""},{title:"Full Width",value:"user-image full"},{title:"Left Aligned",value:"user-image left"},{title:"Centered",value:"user-image center"},{title:"Right Aligned",value:"user-image right"},{title:"Inline with text, top aligned",value:"user-image inline top"},{title:"Inline with text, middle aligned",value:"user-image inline"},{title:"Inline with text, bottom aligned",value:"user-image inline bottom"},{title:"Pulled Left",value:"user-image pull-left"},{title:"Pulled Right",value:"user-image pull-right"}],new CustomEvent("loader-show"),new CustomEvent("loader-hide"),$.hood.Loader=function(e){e?$("body").trigger("loader-show"):$("body").trigger("loader-hide")},$.hood||($.hood={}),$.hood.Helpers={IsNullOrUndefined:function(e){var t=!1;return null!==e&&void 0!==e&&""!==e||(t=!0),t},IsSet:function(e){var t=!1;return null!==e&&void 0!==e&&""!==e||(t=!0),!t},IsEventSupported:function(e){var t=document.createElement("div");e="on"+e;var o=e in t;return o||(t.setAttribute(e,"return;"),o="function"==typeof t[e]),t=null,o},IsFunction:function(e){return e&&"[object Function]"==={}.toString.call(e)},IsUrlExternal:function(e){var t=e.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof t[1]&&t[1].length>0&&t[1].toLowerCase()!==location.protocol||"string"==typeof t[2]&&t[2].length>0&&t[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host},IsInIframe:function(){try{return window.self!==window.top}catch(e){return!0}},HtmlEncode:function(e){return $("<div/>").text(e).html()},HtmlDecode:function(e){return $("<div/>").html(e).text()},FormatCurrency:function(e,t){return t+" "+e.toFixed(2).replace(/./g,function(e,t,o){return t>0&&"."!==e&&(o.length-t)%3==0?","+e:e})},FormatKilobytes:function(e){return e/=1024,e.toFixed(2).replace(/./g,function(e,t,o){return t>0&&"."!==e&&(o.length-t)%3==0?","+e:e})},FormatMegabytes:function(e){return e/=1024,e/=1024,currency+" "+e.toFixed(2).replace(/./g,function(e,t,o){return t>0&&"."!==e&&(o.length-t)%3==0?","+e:e})},FallbackCopyTextToClipboard:function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy")}catch(e){console.error("Oops, unable to copy",e)}document.body.removeChild(t)},CopyTextToClipboard:function(e){if(!navigator.clipboard)return void $.hood.Handlers.FallbackCopyTextToClipboard(e);navigator.clipboard.writeText(e).then(function(){},function(e){console.error("Could not copy text: ",e)})},ProcessResponse:function(e){var t="";e.Title&&(t="<strong>".concat(e.Title,"</strong><br />")),e.Success?$.hood.Alerts.Success("".concat(t).concat(e.Message)):$.hood.Alerts.Error("".concat(t).concat(e.Errors))},GetQueryStringParamByName:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)","i"),o=t.exec(location.search);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))},InsertQueryStringParam:function(e,t){e=escape(e),t=escape(t);var o=document.location.search.substr(1).split("&");if(""===o)document.location.search="?"+e+"="+t;else{for(var n,a=o.length;a--;)if(n=o[a].split("="),n[0]===e){n[1]=t,o[a]=n.join("=");break}a<0&&(o[o.length]=[e,t].join("=")),document.location.search=o.join("&")}},InsertQueryStringParamToUrl:function(e,t,o){t=escape(t),o=escape(o);var n=e.search.substr(1).split("&");if(""===n)e.search="?"+t+"="+o;else{for(var a,i=n.length;i--;)if(a=n[i].split("="),a[0]===t){a[1]=o,n[i]=a.join("=");break}i<0&&(n[n.length]=[t,o].join("=")),e.search=n.join("&")}return e},UrlToLocationObject:function(e){var t=document.createElement("a");return t.href=e,t},FindAndRemoveFromArray:function(e,t,o){$.each(e,function(n,a){a[t]===o&&e.splice(n,1)})},FindAndReturnFromArray:function(e,t,o){var n=null;return $.each(e,function(e,a){a[t]===o&&(n=a)}),n},LeftPad:function(e,t){for(var o=e+"";o.length<t;)o="0"+o;return o},DateAdd:function(e,t,o){var n=new Date(e);switch(t.toLowerCase()){case"year":n.setFullYear(n.getFullYear()+o);break;case"quarter":n.setMonth(n.getMonth()+3*o);break;case"month":n.setMonth(n.getMonth()+o);break;case"week":n.setDate(n.getDate()+7*o);break;case"day":n.setDate(n.getDate()+o);break;case"hour":n.setTime(n.getTime()+36e5*o);break;case"minute":n.setTime(n.getTime()+6e4*o);break;case"second":n.setTime(n.getTime()+1e3*o);break;default:n=void 0}return n},GenerateRandomString:function(e){var t="abcdefghijklmnopqrstuvwxyz",o="ABCDEFGHIJKLMNOPQRSTUVWXYZ",n=t+o+"0123456789";return("!@#$&*".pick(1)+t.pick(1)+o.pick(1)+n.pick(5,10)).shuffle()}},$.hood||($.hood={}),$.hood.Handlers={Init:function(){$("body").on("click",".select-text",$.hood.Handlers.SelectTextContent),$("body").on("click",".btn.click-select[data-target][data-value]",$.hood.Handlers.ClickSelect),$("body").on("click",".click-select.show-selected[data-target][data-value]",$.hood.Handlers.ClickSelect),$("body").on("click",".click-select:not(.show-selected)[data-target][data-value]",$.hood.Handlers.ClickSelectClean),$("body").on("click",".slide-link",$.hood.Handlers.SlideToAnchor),$("body").on("click",".scroll-target, .scroll-to-target",$.hood.Handlers.ScrollToTarget),$("body").on("click",".scroll-top, .scroll-to-top",$.hood.Handlers.ScrollToTop),$("body").on("change","input[type=checkbox][data-input]",$.hood.Handlers.CheckboxChange),$("body").on("change",".submit-on-change",$.hood.Handlers.SubmitOnChange),$("select[data-selected]").each($.hood.Handlers.SelectSetup),$("body").on("change",".inline-date",$.hood.Handlers.DateChange),$.hood.Handlers.Uploaders.Init(),$.hood.Handlers.ColorPickers()},ScrollToTop:function(e){return e&&e.preventDefault(),$("html, body").animate({scrollTop:0},800),!1},ScrollToTarget:function(e){e&&e.preventDefault();var t=$(this).attr("href").split("#")[0];if(t===window.location.pathname||""===t){var o=this.hash,n=$(o),a=$("header.header"),i=0;a&&(i=a.height()),$(this).data("offset")?$("html, body").stop().animate({scrollTop:n.offset().top-$(this).data("offset")},900,"swing"):$("html, body").stop().animate({scrollTop:n.offset().top-i},900,"swing")}},SubmitOnChange:function(e){e&&e.preventDefault(),$(this).parents("form").submit()},DateChange:function(e){e&&e.preventDefault();var t=$(this).parents(".hood-date").find(".date-output"),o=t.parents(".hood-date").find(".date-value").val();/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/.test(o)||(o="01/01/2001");var n=t.parents(".hood-date").find(".hour-value").val();$.isNumeric(n)||(n="00");var a=t.parents(".hood-date").find(".minute-value").val();$.isNumeric(a)||(a="00"),t.val(o+" "+n+":"+a+":00"),t.attr("value",o+" "+n+":"+a+":00")},CheckboxChange:function(e){e&&e.preventDefault();var t=new Array;$('input[data-input="'+$(this).data("input")+'"]').each(function(){$(this).is(":checked")&&t.push($(this).val())});var o="#"+$(this).data("input"),n=JSON.stringify(t);$(o).val(n)},SelectSetup:function(){$(this).data("selected");if("undefined"!==$(this).data("selected")&&""!==$(this).data("selected")){var e=String($(this).data("selected"));$(this).val(e)}},ClickSelect:function(){var e=$(this),t="#"+e.data("target");$(t).val(e.data("value")),$(t).trigger("change"),$('.click-select[data-target="'+e.data("target")+'"]').each(function(){$(this).html($(this).data("temp")).removeClass("active")}),$('.click-select[data-target="'+e.data("target")+'"][data-value="'+e.data("value")+'"]').each(function(){$(this).data("temp",$(this).html()).html("Selected").addClass("active")})},ClickSelectClean:function(){var e=$(this),t="#"+e.data("target");$(t).val(e.data("value")),$(t).trigger("change"),$('.click-select.clean[data-target="'+e.data("target")+'"]').each(function(){$(this).removeClass("active")}),$('.click-select.clean[data-target="'+e.data("target")+'"][data-value="'+e.data("value")+'"]').each(function(){$(this).addClass("active")})},SelectTextContent:function(){var e=$(this);e.select(),e.mouseup(function(){return e.unbind("mouseup"),!1})},SlideToAnchor:function(){var e=$("body").scrollTop(),t=$($.attr(this,"href")).offset().top;return $("html, body").animate({scrollTop:t},Math.abs(t-e)),!1},Uploaders:{Init:function(){($(".image-uploader").length||$(".gallery-uploader").length)&&($(".upload-progress-bar").hide(),$.getScript("/lib/dropzone/min/dropzone.min.js",$.proxy(function(){$(".image-uploader").each(function(){$.hood.Handlers.Uploaders.SingleImage($(this).attr("id"),$(this).data("json"))}),$(".gallery-uploader").each(function(){$.hood.Handlers.Uploaders.Gallery($(this).attr("id"),$(this).data("json"))})},this)))},RefreshImage:function(e,t){$(e.data("preview")).css({"background-image":"url("+t.Media.SmallUrl+")"}),$(e.data("preview")).find("img").attr("src",t.Media.SmallUrl)},SingleImage:function(e,t){e="#"+e;$(e);Dropzone.autoDiscover=!1;var o=new Dropzone(e,{url:$(e).data("url"),maxFiles:1,paramName:"file",parallelUploads:1,acceptedFiles:$(e).data("types")||".png,.jpg,.jpeg,.gif",autoProcessQueue:!0,previewsContainer:!1,clickable:e});o.on("addedfile",function(){}),o.on("totaluploadprogress",function(t){$(".upload-progress-bar."+e.replace("#","")+" .progress-bar").css({width:t+"%"})}),o.on("sending",function(t){$(".upload-progress-bar."+e.replace("#","")).show(),$($(e).data("preview")).addClass("loading")}),o.on("queuecomplete",function(t){$(".upload-progress-bar."+e.replace("#","")).hide()}),o.on("success",function(n,a){a.Success?(a.Media&&($(t).val(JSON.stringify(a.Media)),$($(e).data("preview")).css({"background-image":"url("+a.Media.SmallUrl+")"}),$($(e).data("preview")).find("img").attr("src",a.Media.SmallUrl)),$.hood.Alerts.Success("New image added!")):$.hood.Alerts.Error("There was a problem adding the image: "+a.Error),o.removeFile(n),$($(e).data("preview")).removeClass("loading")})},Gallery:function(e){Dropzone.autoDiscover=!1;var t=document.querySelector(e+"-template");t.id="";var o=t.parentNode.innerHTML;t.parentNode.removeChild(t);var n=new Dropzone(e,{url:$(e).data("url"),thumbnailWidth:80,thumbnailHeight:80,parallelUploads:5,previewTemplate:o,paramName:"files",acceptedFiles:$(e).data("types")||".png,.jpg,.jpeg,.gif",autoProcessQueue:!0,previewsContainer:"#previews",clickable:".fileinput-button",dictDefaultMessage:'<span><i class="fa fa-cloud-upload fa-4x"></i><br />Drag and drop files here, or simply click me!</div>',dictResponseError:"Error while uploading file!"});$(e+" .cancel").hide(),n.on("addedfile",function(t){$(t.previewElement.querySelector(".complete")).hide(),$(t.previewElement.querySelector(".cancel")).show(),$(e+" .cancel").show()}),n.on("totaluploadprogress",function(e){document.querySelector("#total-progress .progress-bar").style.width=e+"%"}),n.on("sending",function(e){document.querySelector("#total-progress").style.opacity="1"}),n.on("complete",function(e){$(e.previewElement.querySelector(".cancel")).hide(),$(e.previewElement.querySelector(".progress")).hide(),$(e.previewElement.querySelector(".complete")).show(),$.hood.Inline.Refresh(".gallery")}),n.on("queuecomplete",function(t){document.querySelector("#total-progress").style.opacity="0",$(e+" .cancel").hide()}),n.on("success",function(e,t){$.hood.Inline.Refresh(".gallery"),t.Success?$.hood.Alerts.Success("New images added!"):$.hood.Alerts.Error("There was a problem adding the profile image: "+t.Error)}),document.querySelector(".actions .cancel").onclick=function(){n.removeAllFiles(!0)}}},ColorPickers:function(){var e=function(e,t){var o=$(t._root.button).parent().data("target");$(t._root.button).css({"background-color":e.toHEXA().toString()});for(var n=t.getColor().toHEXA(),a="",i=n.length-1;i>=0;i--)a=n[i]+a;$(o).val("#"+a),$(o).change()},t=[];$(".color-picker").each(function(o,n){var a=!0;"true"==$(this).data("opacity")&&(a=!1);var i=Pickr.create({el:n.children[0],appClass:"custom-class",theme:"monolith",useAsButton:!0,default:$(this).data("default")||"none",lockOpacity:a,defaultRepresentation:"HEXA",position:"bottom-end",components:{opacity:!0,hue:!0,interaction:{hex:!1,rgba:!1,hsva:!1,input:!0,clear:!0}}}).on("init",function(t){var o=$(t._root.button).parent().data("target"),n=$(o).val();$(o).on("click",$.proxy(function(){this.show()},t)),n&&(t.setColor(n),e(t.getColor(),t))}).on("clear",function(t){var o=$(t._root.button).parent().data("target");t.setColor("transparent"),e(t.getColor(),t),$(o).val(""),$(o).change()}).on("change",e);t.push(i)})}},$(document).ready($.hood.Handlers.Init),String.prototype.contains=function(e){return-1!==this.indexOf(e)},String.prototype.pick=function(e,t){var o,n="";o=void 0===t?e:e+Math.floor(Math.random()*(t-e));for(var a=0;a<o;a++)n+=this.charAt(Math.floor(Math.random()*this.length));return n},String.prototype.shuffle=function(){var e,t,o=this.split(""),n=o.length;if(n)for(;--n;)t=Math.floor(Math.random()*(n+1)),e=o[t],o[t]=o[n],o[n]=e;return o.join("")},String.prototype.toSeoUrl=function(){var e=this.replace(/[^a-zA-Z0-9]/g," ").replace(/\s+/g,"-").toLowerCase();"-"===e.charAt(0)&&(e=e.substring(1));var t=e.length-1;return"-"===e.charAt(t)&&(e=e.substring(0,t)),e},$.hood||($.hood={}),$.hood.FormValidator=function(e,t){this.Options=$.extend({formTag:e,validationRules:null,validationMessages:{},placeBelow:!0,submitButtonTag:null,submitUrl:null,submitFunction:null,serializationFunction:function(){return $(this.formTag).serialize()}},t||{}),this.LoadValidation=function(){$.hood.Helpers.IsNullOrUndefined(this.Options.formTag)||($(this.Options.formTag).find("input, textarea, select").keypress($.proxy(function(e){if(13===e.which)return $.proxy(this.submitForm(),this),e.preventDefault(),!1},this)),$(this.Options.formTag).validate({submitHandler:function(e){e.preventDefault()},errorClass:this.Options.errorClass,focusInvalid:!1,rules:this.Options.validationRules,messages:this.Options.validationMessages}),$.hood.Helpers.IsNullOrUndefined(this.Options.submitButtonTag)||$(this.Options.submitButtonTag).click($.proxy(this.submitForm,this)))},this.submitForm=function(){$(this.Options.formTag).valid()&&(this.TempButtonContent=$(this.Options.submitButtonTag).removeClass("btn-primary").addClass("btn-default").html(),$(this.Options.submitButtonTag).removeClass("btn-primary").addClass("btn-default").html('<i class="fa fa-refresh fa-spin"></i>&nbsp;Loading...'),$(this.Options.formTag).find("input[type=checkbox]").each(function(){$(this).is(":checked")&&$(this).val("true")}),$.post(this.Options.submitUrl,this.Options.serializationFunction(),$.proxy(function(e){$(this.Options.submitButtonTag).removeClass("btn-default").addClass("btn-primary").html(this.TempButtonContent),this.Options.submitFunction(e)},this)))},this.LoadValidation(),this.Options.placeBelow&&$(this.Options.formTag).addClass("validation-below")},$.fn.hoodValidator=function(e){return this.each(function(){var t=$(this);if(!t.data("hoodValidator")){var o=new $.hood.FormValidator(this,e);t.data("hoodValidator",o)}})},$.hood||($.hood={}),$.hood.Addresses={Init:function(){$("body").on("click",".address-set-billing",$.hood.Addresses.SetBilling),$("body").on("click",".address-set-delivery",$.hood.Addresses.SetDelivery),$("body").on("click",".address-delete",$.hood.Addresses.Delete)},Lists:{Address:{Loaded:function(e){$.hood.Loader(!1)},Reload:function(e){$("#address-list").doesExist()&&$.hood.Inline.Reload($("#address-list"),e)}}},Delete:function(e){e.preventDefault();var t=$(this),o=function(e){e&&$.post(t.attr("href"),function(e){$.hood.Helpers.ProcessResponse(e),$.hood.Addresses.Lists.Address.Reload(),e.Success&&t&&t.data("redirect")&&($.hood.Alerts.Success("<strong>Address deleted, redirecting...</strong><br />Just taking you back to the address list."),setTimeout(function(){window.location=t.data("redirect")},1500))})};$.hood.Alerts.Confirm("The address will be permanently removed.","Are you sure?",o,"error",'<span class="text-danger"><i class="fa fa-exclamation-triangle"></i> <strong>This process CANNOT be undone!</strong></span>')},CreateOrEdit:function(){$.hood.Google.Addresses.InitAutocomplete(),$("#address-form").hoodValidator({validationRules:{Number:{required:!0},Address1:{required:!0},City:{required:!0},County:{required:!0},Postcode:{required:!0},Country:{required:!0}},submitButtonTag:$("#address-form-submit"),submitUrl:$("#address-form").attr("action"),submitFunction:function(e){$.hood.Helpers.ProcessResponse(e),$.hood.Addresses.Lists.Address.Reload(),e.Success&&$.hood.Inline.CloseModal()}})},SetBilling:function(e){e.preventDefault();var t=$(this),o=function(e){e&&$.post(t.attr("href"),function(e){$.hood.Helpers.ProcessResponse(e),$.hood.Addresses.Lists.Address.Reload()})};$.hood.Alerts.Confirm("The current billing address will be overwritten.","Are you sure?",o,"error")},SetDelivery:function(e){e.preventDefault();var t=$(this),o=function(e){e&&$.post(t.attr("href"),function(e){$.hood.Helpers.ProcessResponse(e),$.hood.Addresses.Lists.Address.Reload()})};$.hood.Alerts.Confirm("The current delivery address will be overwritten.","Are you sure?",o,"error")}},$(document).ready($.hood.Addresses.Init);var swalWithBootstrapButtons=Swal.mixin({customClass:{confirmButton:"btn btn-success btn-lg m-1 pl-4 pr-4",cancelButton:"btn btn-danger btn-lg m-1"},buttonsStyling:!1}),Toast=Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!0});$.hood||($.hood={}),$.hood.Alerts={Error:function(e,t,o,n,a,i,r){!0===o?this.SweetAlert(e,t,"error",n,a,i,r):this.Alert(e,t,"error")},Warning:function(e,t,o,n,a,i,r){!0===o?this.SweetAlert(e,t,"warning",n,a,i,r):this.Alert(e,t,"warning")},Message:function(e,t,o,n,a,i,r){!0===o?this.SweetAlert(e,t,"info",n,a,i,r):this.Alert(e,t,"info")},Success:function(e,t,o,n,a,i,r){!0===o?this.SweetAlert(e,t,"success",n,a,i,r):this.Alert(e,t,"success")},Alert:function(e,t,o){Toast.fire({type:o||"info",html:e,title:t})},SweetAlert:function(e,t,o,n,a,i,r){swalWithBootstrapButtons.fire({title:t,html:e,type:o||"info",footer:n,showConfirmButton:a,timer:i}).then(function(e){e.dismiss||r(e)})},Confirm:function(e,t,o,n,a,i,r){swalWithBootstrapButtons.fire({title:t||"Woah!",html:e||"Are you sure you want to do this?",type:n||"warning",footer:a||'<span class="text-warning"><i class="fa fa-exclamation-triangle"></i> This cannot be undone.</span>',showCancelButton:!0,confirmButtonText:i||"Ok",cancelButtonText:r||"Cancel"}).then(function(e){e.dismiss||o(e.value)})},Prompt:function(e,t,o,n,a,i,r,s,l){swalWithBootstrapButtons.fire({input:n||"text",inputAttributes:l||{autocapitalize:"off"},title:t||"Enter a value",html:e||"Fill in the field and press Ok to continue.",type:a||"info",footer:i,showCancelButton:!0,confirmButtonText:r||"Ok",cancelButtonText:s||"Cancel"}).then(function(e){e.dismiss||o(e.value)})}},$.hood||($.hood={}),$.hood.Forms={Init:function(){$(".floating-label > label").each(function(){var e=$(this);e.parent().append(e)})},GetAllowedExtensions:function(e){switch(e){case"Image":return["png","jpg","jpeg","bmp","gif"];case"Document":return["doc","docx","pdf","rtf"];case"All":return""}},GetAllowedFiles:function(e){switch(e){case"Image":return"image/png,jpg,image/jpeg,image/gif";case"Document":return"application/msword,application/pdf,text/rtf";case"All":return""}}},$(document).ready($.hood.Forms.Init),$.hood||($.hood={}),$.hood.Inline={Tags:{},Init:function(){$(".hood-inline:not(.refresh)").each($.hood.Inline.Load),$("body").on("click",".hood-inline-task",$.hood.Inline.Task),$("body").on("click",".hood-modal",function(e){e.preventDefault(),$.hood.Inline.Modal($(this).attr("href"),$(this).data("complete"),$(this).data("close"))}),$.hood.Inline.DataList.Init()},Refresh:function(e){$(e||".hood-inline").each($.hood.Inline.Load)},Load:function(){$.hood.Inline.Reload(this)},Reload:function(e,t){var o=$(e);o.addClass("loading"),t||(t=o.data("complete"));var n=o.data("url");$.get(n,$.proxy(function(e){o.html(e),o.removeClass("loading"),t&&$.hood.Inline.RunComplete(t,o,e)},o)).fail($.hood.Inline.HandleError).always($.hood.Inline.Finish)},CurrentModal:null,Modal:function(e,t){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];$.hood.Inline.CurrentModal&&o&&$.hood.Inline.CloseModal(),$.get(e,function(e){var o="#"+$(e).attr("id");$(e).addClass("hood-inline-modal"),$(o).length&&$(o).remove(),$("body").append(e),$.hood.Inline.CurrentModal=$(o),$(o).modal(),$(o).on("shown.bs.modal",function(){$(document).off("focusin.modal")}),$(o).on("hidden.bs.modal",function(e){$(this).remove()}),t&&$.hood.Inline.RunComplete(t,$(o),e)}).fail($.hood.Inline.HandleError).always($.hood.Inline.Finish)},CloseModal:function(){$.hood.Inline.CurrentModal&&$.hood.Inline.CurrentModal.modal("hide")},Task:function(e){e.preventDefault();var t=$(e.currentTarget);t.addClass("loading");var o=t.data("complete");$.get(t.attr("href"),function(e){$.hood.Helpers.ProcessResponse(e),e.Success&&t&&t.data("redirect")&&setTimeout(function(){window.location=t.data("redirect")},1500),t.removeClass("loading"),o&&$.hood.Inline.RunComplete(o,t,e)}).fail($.hood.Inline.HandleError).always($.hood.Inline.Finish)},DataList:{Init:function(){$(".hood-inline-list.query").each(function(){$(this).data("url",$(this).data("url")+window.location.search)}),$(".hood-inline-list:not(.refresh)").each($.hood.Inline.Load),$("body").on("click","a.hood-inline-list-target",function(e){e.preventDefault(),$.hood.Loader(!0);var t=document.createElement("a");t.href=$(this).attr("href");var o=$($(this).data("target")),n=document.createElement("a");n.href=o.data("url"),n.search=t.search,$.hood.Inline.DataList.Reload(o,n),complete=$(this).data("complete"),complete&&$.hood.Inline.RunComplete(complete,$(this))}),$("body").on("click",".hood-inline-list .pagination a",function(e){e.preventDefault(),$.hood.Loader(!0);var t=document.createElement("a");t.href=$(this).attr("href");var o=$(this).parents(".hood-inline-list"),n=document.createElement("a");n.href=o.data("url"),n.search=t.search,$.hood.Inline.DataList.Reload(o,n)}),$("body").on("submit",".hood-inline-list form",function(e){e.preventDefault(),$.hood.Loader(!0);var t=$(this),o=t.parents(".hood-inline-list"),n=document.createElement("a");n.href=o.data("url"),n.search="?"+t.serialize(),$.hood.Inline.DataList.Reload(o,n)}),$("body").on("submit","form.inline",function(e){e.preventDefault(),$.hood.Loader(!0);var t=$(this);$(t.data("target")).each(function(){var e=document.createElement("a");e.href=$(this).data("url"),e.href&&(e.search="?"+t.serialize(),$.hood.Inline.DataList.Reload($(this),e))})}),$("body").on("change","form.inline .refresh-on-change, .hood-inline-list form",function(e){e.preventDefault(),$.hood.Loader(!0);var t=$(this).parents("form"),o=$(t.data("target")),n=document.createElement("a");n.href=o.data("url"),n.search="?"+t.serialize(),$.hood.Inline.DataList.Reload(o,n)})},Reload:function(e,t){if(history.pushState&&e.hasClass("query")){var o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+t.href.substring(t.href.indexOf("?")+1);window.history.pushState({path:o},"",o)}e.data("url",$.hood.Helpers.InsertQueryStringParamToUrl(t,"inline","true")),$.hood.Inline.Reload(e)}},HandleError:function(e){500===e.status?$.hood.Alerts.Error("<strong>Error "+e.status+"</strong><br />There was an error processing the content, please contact an administrator if this continues.<br/>"):404===e.status?$.hood.Alerts.Error("<strong>Error "+e.status+"</strong><br />The content could not be found.<br/>"):401===e.status&&($.hood.Alerts.Error("<strong>Error "+e.status+"</strong><br />You are not allowed to view this resource, are you logged in correctly?<br/>"),window.location=window.location)},Finish:function(){$.hood.Loader(!1)},RunComplete:function RunComplete(complete,sender,data){if(!$.hood.Helpers.IsNullOrUndefined(complete)){var func=eval(complete);"function"==typeof func&&func(sender,data)}}},$(document).ready($.hood.Inline.Init),$.hood.Modals={Open:$.hood.Inline.Modal},$.hood||($.hood={}),$.hood.Media={Init:function(){$("body").on("click",".media-delete",$.hood.Media.Delete),$("body").on("click",".media-directories-delete",$.hood.Media.Directories.Delete),$.hood.Media.Upload.Init(),$.hood.Media.Actions.Init()},Loaded:function(e){$.hood.Loader(!1)},BladeLoaded:function(e){$.hood.Media.LoadMediaPlayers()},Reload:function(e){$.hood.Inline.Reload($("#media-list"),e)},ReloadDirectories:function(e){$.hood.Inline.Reload($("#media-directories-list"),e)},Actions:{Init:function(){$("body").on("click",".hood-image-attach",$.hood.Media.Actions.Load.Attach),$("body").on("click",".hood-image-clear",$.hood.Media.Actions.Complete.Clear),$("body").on("click",".hood-image-insert",$.hood.Media.Actions.Load.Insert),$("body").on("click",".hood-media-select",$.hood.Media.Actions.Load.Select)},Target:null,Json:null,Current:{Attach:null},Load:{Attach:function(e){e.preventDefault(),$.hood.Media.Actions.Target=$($(this).data("tag")),$.hood.Media.Actions.Json=$($(this).data("json")),$.hood.Inline.Modal($(this).data("url"),function(){$.hood.Media.Reload(function(){$("body").off("click",".media-attach"),$("body").on("click",".media-attach",$.hood.Media.Actions.Complete.Attach)}),$.hood.Media.Upload.Init()})},Insert:function(e){var t=$("#"+e.id);t.data("imagesUrl")&&e.addButton("hoodimage",{text:"Insert image...",icon:!1,onclick:$.proxy(function(t){$.hood.Inline.Modal($(this).data("imagesUrl"),function(){$.hood.Media.Reload(function(){$("body").off("click",".media-insert"),$("body").on("click",".media-insert",$.proxy($.hood.Media.Actions.Complete.Insert,e))}),$.hood.Media.Upload.Init()})},t)})},Select:function(e){$.hood.Media.Actions.Target=$($(this).data("target")),$.hood.Inline.Modal($(this).data("url"),function(){$.hood.Media.Reload(function(){$("body").off("click",".media-select"),$("body").on("click",".media-select",$.hood.Media.Actions.Complete.Select)}),$.hood.Media.Upload.Init()})}},Complete:{Attach:function(e){e.preventDefault();var t=$.hood.Media.Actions.Target,o=$.hood.Media.Actions.Json;$.post($(this).data("url"),function(e){if($.hood.Helpers.ProcessResponse(e),e.Success){var n=e.Media.Icon;"Image"===e.Media.GeneralFileType&&(n=e.Media.MediumUrl),$.hood.Helpers.IsNullOrUndefined(t)||(t.css({"background-image":"url("+n+")"}),t.find("img").attr("src",n),t.removeClass("loading")),$.hood.Helpers.IsNullOrUndefined(o)||o.val(e.MediaJson)}
}).done(function(){$("#media-select-modal").modal("hide")}).fail($.hood.Inline.HandleError)},Insert:function(e){var t=$(e.target);this.insertContent('<img alt="'+t.data("title")+'" src="'+t.data("url")+'"/>'),$.hood.Inline.CloseModal()},Select:function(e){var t=$(this).data("url"),o=$.hood.Media.Actions.Target;$(o).each(function(){$(this).is("input")?$(this).val(t):($(this).attr("src",t),$(this).css({"background-image":"url("+t+")"}),$(this).find("img").attr("src",t))}),$.hood.Alerts.Success("Image URL has been inserted.<br /><strong>Remember to press save!</strong>"),$("#media-select-modal").modal("hide")},Clear:function(e){e.preventDefault();var t=$($(this).data("tag")),o=$($(this).data("json"));$.post($(this).data("url"),function(e){$.hood.Helpers.ProcessResponse(e),e.Success&&(icon=e.Media.Icon,"Image"===e.Media.GeneralFileType&&(icon=e.Media.MediumUrl),$.hood.Helpers.IsNullOrUndefined(t)||(t.css({"background-image":"url("+icon+")"}),t.find("img").attr("src",icon),t.removeClass("loading")),$.hood.Helpers.IsNullOrUndefined(o)||o.val(e.Json))}).fail($.hood.Inline.HandleError)}},RefreshImage:function(e,t,o){var n=$(e);n.addClass("loading"),$.get(t,{id:o},$.proxy(function(e){n.css({"background-image":"url("+e.SmallUrl+")"}),n.find("img").attr("src",e.SmallUrl),n.removeClass("loading")},this))}},Upload:{Init:function(){if($("#media-add").doesExist()){$("#media-total-progress").hide(),Dropzone.autoDiscover=!1;var e=new Dropzone("#media-upload",{url:$.hood.Media.Upload.UploadUrl(),thumbnailWidth:80,thumbnailHeight:80,parallelUploads:5,previewTemplate:!1,paramName:"files",acceptedFiles:$("#media-upload").data("types")||".png,.jpg,.jpeg,.gif",autoProcessQueue:!0,previewsContainer:!1,clickable:"#media-add",dictDefaultMessage:'<span><i class="fa fa-cloud-upload fa-4x"></i><br />Drag and drop files here, or simply click me!</div>',dictResponseError:"Error while uploading file!"});e.on("success",function(e,t){$.hood.Helpers.ProcessResponse(t)}),e.on("addedfile",function(e){$("#media-total-progress .progress-bar").css({width:"0%"}),$("#media-total-progress .progress-bar .percentage").html("0%")}),e.on("totaluploadprogress",function(e){$("#media-total-progress .progress-bar").css({width:e+"%"}),$("#media-total-progress .progress-bar .percentage").html(e+"%")}),e.on("sending",function(e){$("#media-total-progress").fadeIn(),$("#media-total-progress .progress-bar").css({width:"0%"}),$("#media-total-progress .progress-bar .percentage").html("0%")}),e.on("complete",function(e){$.hood.Media.Reload()}),e.on("queuecomplete",function(e){$("#media-total-progress").hide(),$.hood.Media.Reload()}),e.on("error",function(e,t){alert(t,e)})}},UploadUrl:function(){var e=$("#media-upload").data("url")+"?directoryId="+$("#media-list > #upload-directory-id").val();return alert(e),e}},Delete:function(e){var t=$(this),o=function(e){e&&$.post("/admin/media/delete",{id:t.data("id")},function(e){$.hood.Helpers.ProcessResponse(e),e.Success&&($.hood.Media.Reload(),$(".modal-backdrop").remove(),$(".modal").modal("hide"))})};$.hood.Alerts.Confirm("The media file will be permanently removed. This cannot be undone.","Are you sure?",o,"warning",'<span class="text-danger"><i class="fa fa-exclamation-triangle"></i> Ensure this file is not attached to any posts, pages or features of the site, or it will appear as a broken image or file.</span>',"Ok","Cancel")},RestrictDir:function(){var e=/[^0-9A-Za-z- ]*/g,t=$(this).val(),o=t.replace(e,"");t!==o&&$(this).val(o)},Directories:{Editor:function(){$("#content-directories-edit-form").hoodValidator({validationRules:{DisplayName:{required:!0},Slug:{required:!0}},submitButtonTag:$("#content-directories-edit-submit"),submitUrl:$("#content-directories-edit-form").attr("action"),submitFunction:function(e){$.hood.Helpers.ProcessResponse(e),$.hood.Media.ReloadDirectories(),$.hood.Media.Reload()}})},Delete:function(e){e.preventDefault();var t=$(this),o=function(e){e&&$.post(t.attr("href"),function(e){$.hood.Helpers.ProcessResponse(e),$.hood.Media.ReloadDirectories(),$.hood.Media.Reload()})};$.hood.Alerts.Confirm("The directory and all files will be permanently removed.","Are you sure?",o,"error",'<span class="text-danger"><i class="fa fa-exclamation-triangle mr-2"></i><strong>This cannot be undone!</strong><br />Ensure these files are not attached to any posts, pages or features of the site, or it will appear as a broken image or file.</span>')}},Players:{},LoadMediaPlayers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".hood-media",t={techOrder:["azureHtml5JS","flashSS","html5FairPlayHLS","silverlightSS","html5"],nativeControlsForTouch:!1,controls:!0,autoplay:!1,seeking:!0};$(e).each(function(){try{if(player=$.hood.Media.Players[$(this).data("id")],player)try{player.dispose()}catch(e){console.log("There was a problem disposing the old media player: ".concat(e))}$.hood.Media.Players[$(this).data("id")]=amp($(this).attr("id"),t),player=$.hood.Media.Players[$(this).data("id")],player.src([{src:$(this).data("file"),type:$(this).data("type")}])}catch(e){console.log("There was a problem playing the media file: ".concat(e))}})}},$(document).ready($.hood.Media.Init),$.window=$(window),$.hood||($.hood={}),$.hood.App={Options:{Header:{Target:"#header",Sticky:!0,StickyClass:"sticky-header"},Alerts:!0,Colorbox:!0,ContactForms:!0},Init:function(e){$.hood.App.Options=$.extend($.hood.App.Options,e||{}),e&&e.Header&&($.hood.App.Options.Header=$.extend($.hood.App.Options.Header,e.Header||{})),$.hood.App.Options.Header.Sticky&&$.hood.App.Header.Init(),$.hood.App.Options.ContactForms&&$.hood.App.ContactForms.Init(),$.hood.App.Options.Alerts&&$.hood.App.Alerts(),$.hood.App.Options.Colorbox&&$.hood.App.Colorbox()},Header:{Init:function(){$.hood.App.Options.Header.Sticky&&($.hood.App.Header.StickyMenu(),$.window.on("scroll",function(){$.hood.App.Header.StickyMenu()}))},StickyMenu:function(){var e=0,t=$($.hood.App.Options.Header.Target);t.length>0&&(e=t.offset().top);var o=t.height(),n=$.window.height()+2*o,a=$(document).height();$.window.scrollTop()>e&&a>n?t.addClass($.hood.App.Options.Header.StickyClass):$.hood.App.Header.RemoveStickyness()},RemoveStickyness:function(){var e=$($.hood.App.Options.Header.Target);e.hasClass($.hood.App.Options.Header.StickyClass)&&e.removeClass($.hood.App.Options.Header.StickyClass)}},ContactForms:{Init:function(){$(".contact-form .thank-you").hide(),$(".contact-form .form-submit").show(),$("body").on("submit",".contact-form",function(e){return e.preventDefault(),$(this).addClass("loading"),$.hood.App.ContactForms.Submit(this),!1})},Submit:function(e){var t=$(e);return t.valid()&&$.post(t.attr("action"),t.serialize(),function(e){e.Success?(t.attr("data-redirect")&&(window.location=t.attr("data-redirect")),t.attr("data-alert-message")&&$.hood.Alerts.Success(t.attr("data-alert-message"),"Success",null,!0),t.find(".form").hide(),t.find(".thank-you").show()):t.attr("data-alert-error")?$.hood.Alerts.Error(t.attr("data-alert-error"),"Error",null,!0):$.hood.Alerts.Error("There was an error sending the message: "+e.Errors,"Error",null,!0),t.removeClass("loading")}),!1}},Alerts:function(){$(".alert.auto-dismiss").fadeTo(5e3,500).slideUp(500,function(){$(".alert.auto-dismiss").slideUp(500)})},Colorbox:function(){$(".colorbox").colorbox({rel:"gallery",maxWidth:"95%",maxHeight:"95%"}),$(".colorbox-iframe").colorbox({iframe:!0,maxWidth:"95%",maxHeight:"95%",innerWidth:640,innerHeight:390})},Property:{Loaded:function(e){$.hood.Loader(!1),$.hood.Google.ClusteredMap()},Reload:function(e){$("#property-list").doesExist()&&$.hood.Inline.Reload($("#property-list"),e)}}};