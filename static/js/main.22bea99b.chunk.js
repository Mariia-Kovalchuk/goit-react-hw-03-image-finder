(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2OyZv",Modal:"Modal_Modal__2qjPv",Img:"Modal_Img__9Omyb"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2dcIo",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2IQAn"}},15:function(e,t,a){e.exports={Button:"Button_Button__2nGfd"}},46:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(9),o=a.n(c),l=a(13),s=a(3),u=a(4),h=a(6),i=a(5),m=a(8),d=a.n(m),y=a(7),b=a.n(y),g=a(14),j=(a(22),a(23),a(0)),p=function(e){Object(h.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchQueryChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()?(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""})):Object(g.error)({text:"Please enter your search query!",delay:2e3})},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,type:"text",placeholder:"Search images and photos",onChange:this.handleSearchQueryChange,value:this.state.searchQuery})]})})}}]),a}(r.Component);var f={fetchSearchQuery:function(e,t){return fetch("".concat("https://pixabay.com/api/","?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("21191808-b7f611822e153568a8c55fc05")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No match found. Please check your query!"))}))}},S=a(12),_=a.n(S);function O(e){var t=e.img,a=t.webformatURL,r=t.largeImageURL,n=e.onClick;return Object(j.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:a,alt:"",className:_.a.ImageGalleryItemImage,onClick:n,"data-source":r})})}var v=a(10),I=a.n(v),x=document.querySelector("#modal-root"),Q=function(e){Object(h.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(j.jsx)("div",{className:I.a.Overlay,onClick:this.handleBackdropClick,children:Object(j.jsx)("div",{className:I.a.Modal,children:Object(j.jsx)("img",{className:I.a.Img,src:this.props.url,alt:""})})}),x)}}]),a}(r.Component),k=a(15),w=a.n(k),C=function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:w.a.Button,onClick:t,children:" Load More"})},G=a(16),M=a.n(G),N=(a(45),"idle"),F="pending",L="resolved",R="rejected",B=function(e){Object(h.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={searchQuery:"",page:1,status:N,searchQueryResult:[],showModal:!1,modalImgUrl:null,total:null,error:null},e.listRef=n.a.createRef(),e.handleFormSubmit=function(t){e.setState({searchQuery:t,page:1,searchQueryResult:[]})},e.fetchSearchQuery=function(){var t=e.state,a=t.searchQuery,r=t.page;f.fetchSearchQuery(a,r).then((function(t){e.setState((function(e){return{searchQueryResult:[].concat(Object(l.a)(e.searchQueryResult),Object(l.a)(t.hits)),status:L,page:e.page+1,total:t.total}}))})).catch((function(t){return e.setState({error:t,status:R})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleImgURL=function(t){e.setState({modalImgUrl:t})},e.handleImgClick=function(t){if(t.currentTarget===t.target){var a=t.target.dataset.source;e.handleImgURL(a),e.toggleModal()}},e}return Object(u.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){if(t.searchQueryResult.length<this.state.searchQueryResult.length){var a=this.listRef.current;return a.scrollHeight-a.scrollTop}return null}},{key:"componentDidUpdate",value:function(e,t,a){t.searchQuery!==this.state.searchQuery&&(this.setState({status:F}),this.fetchSearchQuery()),null!==a&&window.scrollTo({top:a,behavior:"smooth"})}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchQueryResult,r=t.status,n=t.error,c=t.modalImgUrl,o=t.showModal,l=t.total,s=t.page;return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{onSubmit:this.handleFormSubmit}),"pending"===r&&Object(j.jsx)(M.a,{className:d.a.Loader,type:"Circles",color:"#3f51b5",height:100,width:100,timeout:5e3}),Object(j.jsx)("div",{ref:this.listRef,children:"resolved"===r&&a.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("ul",{className:d.a.ImageGallery,children:a.map((function(t){return Object(j.jsx)(O,{onClick:e.handleImgClick,img:t},t.id)}))}),l>12*(s-1)&&Object(j.jsx)(C,{onClick:this.fetchSearchQuery}),o&&Object(j.jsx)(Q,{onClose:this.toggleModal,url:c})]})}),"resolved"===r&&!a.length&&Object(j.jsx)("p",{className:d.a.ErrorQuery,children:"No match found. Please check your query!"}),"rejected"===r&&Object(j.jsx)("p",{className:d.a.ErrorQuery,children:n.message})]})}}]),a}(r.Component),U=function(){return Object(j.jsx)(B,{})};o.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1VQZc",SearchForm:"Searchbar_SearchForm__3bLLr",SearchFormButton:"Searchbar_SearchFormButton__ujR-6",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2cGBi",SearchFormInput:"Searchbar_SearchFormInput__2Gecm","SearchForm-input":"Searchbar_SearchForm-input__2Vnxw"}},8:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1irTX",ErrorQuery:"ImageGallery_ErrorQuery__1mXM1",Loader:"ImageGallery_Loader__VjVJJ"}}},[[46,1,2]]]);
//# sourceMappingURL=main.22bea99b.chunk.js.map