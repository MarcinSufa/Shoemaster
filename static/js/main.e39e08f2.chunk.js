(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports={Label:"Input_Label__3mFeF",InputElement:"Input_InputElement__2Tecq",Invalid:"Input_Invalid__3J2H4",ValidationError:"Input_ValidationError__3SSca"}},29:function(e,t,a){e.exports={Button:"Button_Button__16rfy",editCartBtn:"Button_editCartBtn__1kSax",ShoeNotAvailableSize:"Button_ShoeNotAvailableSize__2xufe",ShoeAvailableSizeBtn:"Button_ShoeAvailableSizeBtn__1NCvn",ShoeAvailableSizeBtnActive:"Button_ShoeAvailableSizeBtnActive__2h7E8",Danger:"Button_Danger__RbA5t",madeOf:"Button_madeOf__A8E3j"}},38:function(e,t,a){e.exports=a.p+"static/media/shopping-cart.14520b56.svg"},40:function(e,t,a){e.exports=a.p+"static/media/empty.1bc44745.png"},41:function(e,t,a){e.exports=a.p+"static/media/done.46ea2fc3.png"},42:function(e,t,a){e.exports=a.p+"static/media/warning.2861e7cc.png"},44:function(e,t,a){e.exports=a(95)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),o=a(10),i=(a(49),a(1)),u=a(2),s=a(4),d=a(3),m=a(5),p=(a(50),a(51),a(52),function(e){return r.a.createElement("button",{className:"CartCountNum"},e.count)}),h=a(7),f=a(38),v=a.n(f),g=(a(57),function(e){return r.a.createElement("div",{className:"Hamburger "+e.className,onClick:e.clicked},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))}),C=a(22),E=a.n(C),b=E.a.create({baseURL:"https://shoemaster-605bc.firebaseio.com/"}),O=function(e){return function(t){t(function(e){return{type:"CART_COUNTER",cartItemsCounter:e}}(Object.keys(e).length))}},y=function(){return function(e){var t=JSON.parse(localStorage.getItem("addToCart"));if(t){for(var a=Object.values(t),n=0,r=0;r<a.length;r++)n+=a[r].price;e(function(e,t,a){return{type:"FETCH_CART_FROM_LOCAL_STORE",localCart:e,fullCartPrice:t,cartItemsCounter:a}}(t,n,a.length))}else e(function(e){return{type:"FETCH_CART_FROM_LOCAL_FAIL",cart:e}}(t=null))}},k=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},S=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},N=function(e){return function(t){setTimeout(function(){t(S())},1e3*e)}},I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={menuIsClicked:!1},a.menuClickedHandler=function(){a.setState(function(e){return{menuIsClicked:!e.menuIsClicked}}),console.log(a.state.menuIsClicked)},a.closeMenuHandler=function(){a.setState({menuIsClicked:!1})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.initCartCouter()}},{key:"render",value:function(){var e="NavLink",t="RightNavLink",a="",l="";return this.state.menuIsClicked&&(e="NavLinkMobile",t="mobileLinksWrapper",l="open"),this.props.cartCounter&&(a=r.a.createElement(p,{count:this.props.cartCounter})),r.a.createElement("nav",{className:"NavBarDiv"},r.a.createElement("ul",{className:"LeftNavLink"},r.a.createElement(o.b,{onClick:this.closeMenuHandler,to:"/",activeClassName:"rootActive",exact:!0,className:"Logo"},"Shoemaster")),r.a.createElement("ul",{className:t},r.a.createElement("div",{className:"HamMenu"},r.a.createElement(g,{className:l,clicked:this.menuClickedHandler})),this.props.isAuthenticated?r.a.createElement(n.Fragment,null,r.a.createElement(o.b,{onClick:this.closeMenuHandler,activeClassName:"activeLink",to:"/Account",className:e},"Account"),r.a.createElement(o.b,{onClick:this.closeMenuHandler,activeClassName:"activeLink",to:"/Logout",className:e},"Logout")):r.a.createElement(o.b,{onClick:this.closeMenuHandler,activeClassName:"activeLink",to:"/Login",className:e},"Login"),r.a.createElement(o.b,{onClick:this.closeMenuHandler,activeClassName:"activeLink",to:"/Cart",className:e},r.a.createElement("img",{className:"shoppingCart",src:v.a,alt:"shopping cart"}),a)))}}]),t}(n.Component),T=Object(h.b)(function(e){return{cartCounter:e.cart.cartItemsCounter,isAuthenticated:null!==e.auth.token}},function(e){return{initCartCouter:function(){return e(y())}}})(I),j=(a(82),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement("div",{className:"Layout"},this.props.children))}}]),t}(n.Component)),P=a(15),A=(a(83),a(84),function(){return r.a.createElement("div",{className:"Loader"},"Loading...")}),_=a(40),w=a.n(_),D=a(29),L=a.n(D),H=function(e){return r.a.createElement("button",{value:e.value,disabled:e.disabled,className:[L.a.Button,L.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},z=(a(85),function(e){return r.a.createElement("div",{className:"ProductInCart",onClick:e.clicked},r.a.createElement("div",{className:"cartProductWrapper"},r.a.createElement("img",{className:"SmallProductImage",src:e.image,alt:e.alt})),r.a.createElement("div",{className:"CartProductInfo"},r.a.createElement("h4",null,e.brand),r.a.createElement("p",null,e.model)),r.a.createElement("div",{className:"CartProductInfo"},r.a.createElement("h4",null,"No."),r.a.createElement("p",null,e.quantity)),r.a.createElement("div",{className:"CartProductInfo"},r.a.createElement("h4",null,"Size"),r.a.createElement("p",null,e.size)," "),r.a.createElement("div",{className:"CartProductInfo"},r.a.createElement("h4",null,"Price"),r.a.createElement("p",null,e.price,"$")," "),r.a.createElement("div",{className:"cartProductDelete "+e.noBtn},r.a.createElement(H,{value:e.id,clicked:e.onClick},"Delete")))}),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={fullPrice:null,ProductCount:null},a.handleDelete=function(e){e.preventDefault(),a.props.onDeleteFromCart(e),a.componentDidMount()},a.cartCountHandler=function(){var e=Object.keys(a.state.Cart).length;a.setState({ProductCount:e})},a.goToCheckout=function(e){e.preventDefault(),a.props.isAuthenticated?a.props.history.replace("/Checkout"):a.props.history.replace("/Login")},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitCart()}},{key:"render",value:function(){var e=this,t=null,a=null,n=null;return this.props.loading?r.a.createElement(A,null):(0!==this.props.fullPrice&&this.props.Cart?(a=r.a.createElement("h3",null,"Total Price: ",this.props.fullPrice," $"),t=Object.entries(this.props.Cart).map(function(t){return r.a.createElement(z,{key:t[0],id:t[0],image:t[1].image,alt:t[1].brand+" "+t[1].model,brand:t[1].brand,model:t[1].model,quantity:t[1].quantity,size:t[1].size,price:t[1].price,onClick:e.handleDelete})}),n=r.a.createElement(H,{clicked:this.goToCheckout},this.props.isAuthenticated?"Checkout":"Signup to Order"," ")):t=r.a.createElement("div",null,r.a.createElement("h3",null," is Empty"),r.a.createElement("img",{className:"ImageEmptyCart",src:w.a,alt:"empty cart"})),r.a.createElement("div",{className:"CartBox"},r.a.createElement("h1",null,"Your Cart"),r.a.createElement("div",{className:"CartWrapper"},r.a.createElement("div",null,t)),a,n,null))}}]),t}(n.Component),M=Object(h.b)(function(e){return{Cart:e.cart.cart,loading:e.cart.loading,fullPrice:e.cart.fullCartPrice,isAuthenticated:null!==e.auth.token}},function(e){return{onInitCart:function(){return e(y())},onDeleteFromCart:function(t){return e(function(e){return function(t){var a=JSON.parse(localStorage.getItem("addToCart")),n=e.currentTarget.value;a.splice(n,1),t(function(e){return{type:"DELETE_FROM_CART",cartDecreaseCounter:e}}(Object.keys(a).length)),localStorage.setItem("addToCart",JSON.stringify(a))}}(t))}}})(F),R=a(6),B=(a(86),a(24)),x=a.n(B),U=function(e){var t=null,a=[x.a.InputElement];e.invalid&&e.shouldValidate&&e.touched&&a.push(x.a.Invalid);var n=null,l=e.value;switch(e.invalid&&e.touched&&("password"===e.elementConfig.type&&(l=null),n=r.a.createElement("p",{className:x.a.ValidationError},e.elementConfig.placeholder," ",l," is not valid, try again!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" "),onChange:e.changed},e.elementConfig,{value:e.value}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a,onChange:e.changed},e.elementConfig,{value:e.value}));break;case"dropdown":case"email":t=r.a.createElement("input",Object.assign({className:a,onChange:e.changed},e.elementConfig,{value:e.value}));break;case"select":t=r.a.createElement("select",Object.assign({className:a,onChange:e.changed},e.elementConfig,{value:e.value}),e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:a,onChange:e.changed},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:"Input"},r.a.createElement("label",{className:"Label"},e.label),t,n)},q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={Order:null,CustomerData:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:6},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Delivery - Fastest"},{value:"cheapest",displayValue:"Delivery - Cheapest"}]},value:"fastest",validation:{},valid:!0}},loading:!1,error:!1,checkoutPrice:null,formIsValid:!1},a.orderHandler=function(e){e.preventDefault(),a.setState({loading:!0});var t={},n=a.props.token;for(var r in a.state.CustomerData)t[r]=a.state.CustomerData[r];var l=(new Date).toLocaleString(),c={OrderDetails:a.props.Cart,CustomerData:t,OrderDate:l,Price:a.props.fullPrice,userId:a.props.userId};b.post("/orders.json?auth="+n,c).then(function(e){a.setState({loading:!1}),a.props.cartDeleteHandler(),a.props.onUpdateCart()}).then(function(){return a.props.history.replace("/")}).catch(function(e){a.setState({loading:!1})})},a.fullPriceCheckout=function(){for(var e=Object.values(a.props.Cart),t=0,n=0;n<e.length;n++)t+=e[n].price;a.setState({checkoutPrice:t})},a.inputChangeHandler=function(e,t){var n=Object(R.a)({},a.state.CustomerData),r=Object(R.a)({},n[t]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0,n[t]=r;var l=!0;for(var c in n)l=n[c].valid&&l;a.setState({CustomerData:n,formIsValid:l})},a.handleCartEdit=function(){a.props.history.replace("/Cart")},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(e){this.props.token||this.props.history.replace("/"),this.props.onInitCheckout(),console.log(this.props.Cart),console.log(this.state.Order)}},{key:"checkValidity",value:function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a}},{key:"render",value:function(){var e=this,t=this.props.fullPrice,a=null,n=[],l=null;for(var c in this.state.CustomerData)n.push({id:c,config:this.state.CustomerData[c]});return this.props.loading?r.a.createElement(A,null):(this.props.fullPrice&&this.props.Cart&&(t=r.a.createElement("h4",null,this.props.fullPrice," $"),a=r.a.createElement("form",{onSubmit:this.orderHandler},r.a.createElement("h3",null,"Contact Data"),n.map(function(t){return r.a.createElement(U,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangeHandler(a,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})}),r.a.createElement(H,{disabled:!this.state.formIsValid},"ORDER")),l=Object.entries(this.props.Cart).map(function(e){return r.a.createElement("div",{className:"ProductInCheckout",key:e[0]},r.a.createElement("div",{className:"CheckoutProductInfo"},r.a.createElement("img",{className:"CheckoutProductImage",src:e[1].image,alt:"nike shoes"})),r.a.createElement("div",{className:"ProductWrapper"},r.a.createElement("div",{className:"CheckoutProductInfo"},r.a.createElement("p",null,e[1].brand),r.a.createElement("p",null,e[1].model),r.a.createElement("p",null,e[1].size)),r.a.createElement("div",{className:"CheckoutProductInfo"},r.a.createElement("p",null,e[1].price,"$")," ")))})),r.a.createElement("div",{className:"Checkoutwrapper"},r.a.createElement("h1",null,"Checkout"),r.a.createElement("hr",null),r.a.createElement("div",{className:"CheckoutTemplate"},r.a.createElement("div",{className:"CheckoutForm"},a),r.a.createElement("div",{className:"CheckoutSummary"},r.a.createElement("h3",null,"Order Summary"),r.a.createElement("hr",null),r.a.createElement("div",{className:"OrderFullPrice"},r.a.createElement("h4",null,"Order Price: "),t),r.a.createElement("p",null,"Product list"),l,r.a.createElement("div",{className:"editCartBtn"},r.a.createElement(H,{btnType:"editCartBtn",clicked:this.handleCartEdit},"Edit"))))))}}]),t}(n.Component),V=Object(h.b)(function(e){return{Cart:e.cart.cart,loading:e.cart.loading,fullPrice:e.cart.fullCartPrice,token:e.auth.token,userId:e.auth.userId}},function(e){return{onInitCheckout:function(){return e(y())},cartDeleteHandler:function(){return e(function(e){localStorage.removeItem("addToCart")})},onUpdateCart:function(){return e(y())}}})(q),W=(a(87),a(88),function(e){return r.a.createElement("div",{className:e.class},r.a.createElement("span",null,"upper: ",r.a.createElement("div",{className:"ShoeAvailableSize"},e.upper)),r.a.createElement("span",null,"lining:",r.a.createElement("div",{className:"ShoeAvailableSize"},e.lining)," "),r.a.createElement("span",null,"outerSole:",r.a.createElement("div",{className:"ShoeAvailableSize"},e.outerSole)," "))}),J=function(e){var t=Object.entries(e.size).map(function(e,t){return 0!==e[1]?r.a.createElement("div",{className:"ShoeAvailableSize",key:t},e[0]):null});return r.a.createElement("div",{className:"ProductCard",key:e.id,onClick:e.clicked},r.a.createElement("div",{className:"ImagePlaceholder"},r.a.createElement("h3",{className:"PriceTag"},e.price," $"),r.a.createElement("img",{className:"ProductImage",src:e.image,alt:e.model+" image"})),r.a.createElement("span",null,r.a.createElement("h2",null,e.brand))," ",r.a.createElement("span",null),r.a.createElement("h3",null,e.model),r.a.createElement("div",null,t),r.a.createElement("button",{className:"btnShoeMadeOf"},"Made off"),r.a.createElement(W,{class:e.class,upper:e.madeOf.upper,lining:e.madeOf.lining,outerSole:e.madeOf.outerSole}))},$=(a(89),a(90),a(91),function(e){return r.a.createElement("div",{className:"Backdrop",onClick:e.clicked})}),Y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="Modal ";return this.props.className&&(e+=this.props.className),r.a.createElement(r.a.Fragment,null,r.a.createElement($,{clicked:this.props.modalClosed}),r.a.createElement("div",{className:e},this.props.children))}}]),t}(n.Component),G=(a(92),a(41)),Z=a.n(G),Q=a(42),X=a.n(Q),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={quantity:null,id:null,size:null,price:null,image:null,addedToCart:!1,sizeNotSelected:!1,continueToCart:!1,madeOfClicked:!1},a.addToCartHandler=function(e,t,n){var r=Object(R.a)({},a.state);a.state.size?(r.quantity=1,r.id=e,r.price=t,r.image=n,a.setState({quantity:r.quantity,id:r.id,price:r.price,addedToCart:!0,image:r.image},function(){var e={id:a.state.id,size:a.state.size,quantity:a.state.quantity,price:a.state.price,image:a.state.image,brand:a.props.brand,model:a.props.model,type:a.props.type,madeOf:a.props.madeOf};a.props.onAddToCart(e),a.setState({continueToCart:!0})})):a.setState({sizeNotSelected:!0})},a.alertHandler=function(){a.setState({sizeNotSelected:!1})},a.selectSizeHandler=function(e){a.setState({size:e[0]})},a.continueHandler=function(e){a.props.history.push("/"),a.setState({continueToCart:!1})},a.goToCartHandler=function(){a.props.history.push("/Cart"),a.setState({continueToCart:!1})},a.showMadeOf=function(){a.setState(function(e){return{madeOfClicked:!e.madeOfClicked}}),window.scrollTo(0,0)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=null,a=null;this.state.sizeNotSelected&&(t=r.a.createElement(Y,{className:"sizeAlert",modalClosed:this.alertHandler},r.a.createElement("img",{className:"productAddedImg",src:X.a,alt:"Product added to cart"}),r.a.createElement("div",{className:"alertStyle"}," ",r.a.createElement("p",null,"Please Select your size!")))),this.state.continueToCart&&(a=r.a.createElement(Y,{className:"continueAlert"},r.a.createElement("h4",null,"Product was added to Cart"),r.a.createElement("img",{className:"productAddedImg",src:Z.a,alt:"Product added to cart"}),r.a.createElement(H,{clicked:this.continueHandler},"Continue Shopping"),r.a.createElement(H,{clicked:this.goToCartHandler},"Go to Cart")));var n=Object.entries(this.props.size).map(function(t,a){if(0===t[1])return r.a.createElement("button",{className:"ShoeNotAvailableSize",disabled:!0,key:a},t[0]);var n=e.state.size===t[0]?"ShoeAvailableSizeBtnActive":"ShoeAvailableSizeBtn";return r.a.createElement("button",{className:n,onClick:function(){e.selectSizeHandler(t)},key:a},t[0])}),l=this.props.id,c=this.props.price,o=this.props.image,i=r.a.createElement(H,{clicked:function(){return e.addToCartHandler(l,c,o)}},"Add to Cart");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"close",onClick:this.props.exit}),r.a.createElement("div",{className:"FullProductCard"},r.a.createElement("div",{className:"FullProductLeft"},r.a.createElement("h3",{className:"FullPriceTag"},this.props.price," $"),r.a.createElement("img",{className:"FullProductImage",src:this.props.image,alt:this.props.model+" shoe image"}),this.state.madeOfClicked?r.a.createElement(W,{class:"ShoeMaterials",upper:this.props.madeOf.upper,lining:this.props.madeOf.lining,outerSole:this.props.madeOf.outerSole}):null),r.a.createElement("div",{className:"FullProductRigth"},t,r.a.createElement("h1",null,this.props.brand),r.a.createElement("span",null,r.a.createElement("h2",null,this.props.model)),r.a.createElement("h4",null,"Product id: ",this.props.id," "),r.a.createElement("p",null,this.props.description),r.a.createElement(H,{btnType:"madeOf",clicked:this.showMadeOf},"Made off:"),r.a.createElement("h3",null,"Chose your size"),r.a.createElement("div",{className:"ProductSize"},n),i,a)))}}]),t}(n.Component),ee=Object(P.f)(Object(h.b)(null,function(e){return{onAddToCart:function(t){return e(function(e){return function(t){var a=localStorage.getItem("addToCart");if(null!=a){var n=JSON.parse(a);n.push(e),t(O(n)),localStorage.setItem("addToCart",JSON.stringify(n))}else{var r=[];r.push(e),t(O(1)),localStorage.setItem("addToCart",JSON.stringify(r))}}}(t))}}})(K)),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedProductId:null,selectedProductData:null,visible:8},a.productSelectedHandler=function(e,t){a.setState({selectedProductId:e}),a.setState({selectedProductData:t})},a.productSelectCancelHandler=function(){a.setState({selectedProductId:null})},a.loadMore=function(){a.setState(function(e){return{visible:e.visible+12}})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitProducts()}},{key:"render",value:function(){var e=this,t=null,a=null,n=null,l=this.props.loading?r.a.createElement(A,null):null;return n=this.props.error&&this.props.prod?r.a.createElement("p",null,"Unfortunately, we can't load shoes from the database!"):null,this.props.prod&&(n=this.props.prod.slice(0,this.state.visible).map(function(t,a){return r.a.createElement(J,{key:t.id,brand:t.brand,model:t.model,price:t.price,image:t.image,size:t.size,type:t.type,madeOf:t.madeOf,class:"HideMaterials",clicked:function(){return e.productSelectedHandler(t.id,t)}})}),t=r.a.createElement(H,{clicked:this.loadMore},"Load more")),null!=this.state.selectedProductId&&(a=r.a.createElement(Y,{modalClosed:this.productSelectCancelHandler},r.a.createElement(ee,{id:this.state.selectedProductId,brand:this.state.selectedProductData.brand,model:this.state.selectedProductData.model,price:this.state.selectedProductData.price,description:this.state.selectedProductData.description,image:this.state.selectedProductData.image,size:this.state.selectedProductData.size,type:this.state.selectedProductData.type,madeOf:this.state.selectedProductData.madeOf,exit:this.productSelectCancelHandler}))),r.a.createElement("div",null,l,a,r.a.createElement("div",{className:"ShoeDisplayer"},n),t)}}]),t}(n.Component),ae=Object(h.b)(function(e){return{prod:e.productList.Products,error:e.productList.error,loading:e.productList.loading}},function(e){return{onInitProducts:function(){return e(function(e){e({type:"FETCH_START"}),b.get("/Products.json").then(function(t){e({type:"FETCH_PRODUCTS",products:t.data})}).catch(function(t){e({type:"FETCH_PRODUCTS_FAIL"})})})}}})(te),ne=a(23),re=(a(93),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},a.inputChangeHandler=function(e,t){var n=Object(R.a)({},a.state.controls,Object(ne.a)({},t,Object(R.a)({},a.state.controls[t],{value:e.target.value,valid:a.checkValidity(e.target.value,a.state.controls[t].validation),touched:!0})));a.setState({controls:n})},a.submitHandler=function(e){e.preventDefault(),a.props.onAuth(a.state.controls.email.value,a.state.controls.password.value,a.state.isSignup)},a.switchAuthModeHandler=function(){a.setState(function(e){return{isSignup:!e.isSignup}})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"checkValidity",value:function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var n=t.map(function(t){return r.a.createElement(U,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangeHandler(a,t.id)},invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched})});this.props.loading&&(n=r.a.createElement(A,null));var l=null;this.props.error&&(l=r.a.createElement("p",{className:"error"},"Unfortunately! ",this.props.error.message.replace(/_/g," ")));var c=null;return this.props.isAuthenticated&&this.props.onRedirectBackToCart?c=r.a.createElement(P.a,{to:"/Cart"}):this.props.isAuthenticated&&null==this.props.onRedirectBackToCart&&(c=r.a.createElement(P.a,{to:"/"})),r.a.createElement("div",{className:"Auth"},c,l,r.a.createElement("h3",{className:"AuthHeader"},this.state.isSignup?"Sign-up":"Login"),r.a.createElement("form",{onSubmit:this.submitHandler},n,r.a.createElement(H,{btnType:"Success"},"Submit ")),r.a.createElement(H,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"Switch to ",this.state.isSignup?"Login":"Signup"," \u2611"))}}]),t}(n.Component)),le=Object(h.b)(function(e){return{onRedirectBackToCart:e.cart.cart,loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token}},function(e){return{onAuth:function(t,a,n){return e(function(e,t,a){return function(n){n({type:"AUTH_START"});var r={email:e,password:t,returnSecureToken:!0},l="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC3MCisugq3bT-Gtl3ke1ittYWUJsEQZyI";a||(l="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC3MCisugq3bT-Gtl3ke1ittYWUJsEQZyI"),E.a.post(l,r).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),n(k(e.data.idToken,e.data.localId)),n(N(e.data.expiresIn))}).catch(function(e){n({type:"AUTH_FAIL",error:e.response.data.error})})}}(t,a,n))}}})(re),ce=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(P.a,{to:"/"})}}]),t}(n.Component),oe=Object(h.b)(null,function(e){return{onLogout:function(){return e(S())}}})(ce),ie=(a(94),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={accountData:null,loading:!1,error:null,showProducts:!1,ProductId:null},a.openProductList=function(e){a.setState(function(e){return{showProducts:!e.showProducts}}),e!==a.state.ProductId?a.setState({showProducts:!0,ProductId:e}):a.setState({ProductId:e})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0});var t="?auth="+this.props.token+'&orderBy="userId"&equalTo="'+this.props.userId+'"';b.get("/orders.json"+t).then(function(t){e.setState({accountData:t.data,loading:!1})}).catch(function(t){e.setState({error:t,loading:!1})})}},{key:"render",value:function(){var e=this,t=null,a=null;return this.state.loading&&(t=r.a.createElement(A,null)),this.state.accountData&&(a=Object.entries(this.state.accountData).map(function(t){return r.a.createElement("div",{className:"Account",key:t[0]},r.a.createElement("div",{className:"OrderWrapper"},r.a.createElement("div",{className:"OrderProductInfo"},r.a.createElement("h4",null,"Date")," ",r.a.createElement("p",null,t[1].OrderDate)),r.a.createElement("div",{className:"OrderProductInfo"},r.a.createElement("h4",null,"Email")," ",r.a.createElement("p",null,t[1].CustomerData.email.value)," "),r.a.createElement("div",{className:"OrderProductInfo"},r.a.createElement("h4",null,"Name")," ",r.a.createElement("p",null,t[1].CustomerData.name.value)),r.a.createElement("div",{className:"OrderProductInfo"},r.a.createElement("h4",null,"Street")," ",r.a.createElement("p",null,t[1].CustomerData.street.value)),r.a.createElement("div",{className:"OrderProductInfo"},r.a.createElement("h4",null,"Total "),r.a.createElement("p",null,t[1].Price," $")),r.a.createElement("div",{className:"OrderProductBtn"},r.a.createElement(H,{clicked:function(){e.openProductList(t[0])}},"Details"))),e.state.showProducts&&t[0]===e.state.ProductId?Object.entries(t[1].OrderDetails).map(function(e){return r.a.createElement(z,{key:e[0],id:e[0],image:e[1].image,alt:e[1].brand+" "+e[1].model,brand:e[1].brand,model:e[1].model,quantity:e[1].quantity,size:e[1].size,price:e[1].price,noBtn:"noBtn"})}):null)})),r.a.createElement("div",{className:"OrdersLayout"},t,r.a.createElement("h1",null,"Your Orders"),a)}}]),t}(n.Component)),ue=Object(h.b)(function(e){return{userId:e.auth.userId,token:e.auth.token}})(ie),se=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=r.a.createElement(P.d,null,r.a.createElement(P.b,{path:"/Cart",component:M}),r.a.createElement(P.b,{path:"/Login",component:le}),r.a.createElement(P.b,{path:"/",exact:!0,component:ae}),r.a.createElement(P.a,{to:"/"}));return this.props.isAuthenticated&&(e=r.a.createElement(P.d,null,r.a.createElement(P.b,{path:"/Cart",component:M}),r.a.createElement(P.b,{path:"/Logout",component:oe}),r.a.createElement(P.b,{path:"/Login",component:le}),r.a.createElement(P.b,{path:"/Account",component:ue}),r.a.createElement(P.b,{path:"/Checkout",component:V}),r.a.createElement(P.b,{path:"/",exact:!0,component:ae}),r.a.createElement(P.a,{to:"/"}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null,e))}}]),t}(n.Component),de=Object(P.f)(Object(h.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(S());else{var n=localStorage.getItem("userId");e(k(t,n)),e(N((a.getTime()-(new Date).getTime())/1e3))}}else e(S())})}}})(se)),me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var he=a(16),fe={Products:null,error:!1,loading:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_START":return Object(R.a)({},e,{loading:!0});case"FETCH_PRODUCTS":return Object(R.a)({},e,{Products:t.products,error:!1,loading:!1});case"FETCH_PRODUCTS_FAIL":return Object(R.a)({},e,{error:!0,loading:!1});default:return e}},ge={cart:null,loading:!0,fullCartPrice:null,cartItemsCounter:null},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CART_FROM_LOCAL_STORE":return Object(R.a)({},e,{cart:t.localCart,fullCartPrice:t.fullCartPrice,cartItemsCounter:t.cartItemsCounter,loading:!1});case"FETCH_CART_FROM_LOCAL_FAIL":return Object(R.a)({},e,{loading:!1,cart:t.cart,cartItemsCounter:null});case"DELETE_FROM_CART":return Object(R.a)({},e,{cartItemsCounter:t.cartDecreaseCounter,loading:!1});case"CART_COUNTER":return Object(R.a)({},e,{cartItemsCounter:t.cartItemsCounter,loading:!1});default:return e}},Ee={token:null,userId:null,error:null,loading:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return function(e,t){return Object(R.a)({},e,{error:null,loading:!0})}(e);case"AUTH_SUCCESS":return function(e,t){return Object(R.a)({},e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case"AUTH_FAIL":return function(e,t){return Object(R.a)({},e,{error:t.error,loading:!1})}(e,t);case"AUTH_LOGOUT":return function(e,t){return Object(R.a)({},e,{token:null,userId:null})}(e);default:return e}},Oe=a(43),ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,ke=Object(he.c)({cart:Ce,productList:ve,auth:be}),Se=Object(he.e)(ke,ye(Object(he.a)(Oe.a))),Ne=r.a.createElement(h.a,{store:Se},r.a.createElement(o.a,null,r.a.createElement(de,null)));c.a.render(Ne,document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Shoemaster",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Shoemaster","/service-worker.js");me?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):pe(t,e)})}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.e39e08f2.chunk.js.map