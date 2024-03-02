"use strict";(self.webpackChunkgoit_react_woolf_hw_05_movies=self.webpackChunkgoit_react_woolf_hw_05_movies||[]).push([[135],{854:function(e,t,n){n(791);var r=n(154),i=n(184);t.Z=function(e){var t=e.size,n=e.color;return(0,i.jsx)("div",{children:(0,i.jsx)(r.gy,{color:n,height:t,width:t})})}},794:function(e,t,n){var r=n(861),i=n(757),a=n.n(i),s=n(294),o="6771e757581944322d46c2e737d343a7";s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.timeout=3e3;var c=s.Z.create();function u(){return u=(0,r.Z)(a().mark((function e(){var t,n,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"day",r.length>1&&void 0!==r[1]?r[1]:"en-US",e.next=4,c.get("/trending/movie/".concat(t),{params:{api_key:o}});case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){return l=(0,r.Z)(a().mark((function e(t){var n,r,i,s,u,l,v=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.length>1&&void 0!==v[1]?v[1]:1,r=v.length>2&&void 0!==v[2]?v[2]:"en-US",i=v.length>3&&void 0!==v[3]?v[3]:"",s=v.length>4&&void 0!==v[4]?v[4]:"",u=v.length>5&&void 0!==v[5]&&v[5],e.next=7,c.get("/search/movie",{params:{api_key:o,query:t,page:n,language:r,primary_release_year:i,region:s,include_adult:u}});case 7:return l=e.sent,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function v(){return v=(0,r.Z)(a().mark((function e(t){var n,r,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"en-US",e.next=3,c.get("/movie/".concat(t),{params:{api_key:o,language:n}});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"),{params:{api_key:o}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return p=(0,r.Z)(a().mark((function e(t){var n,r,i,s=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:1,r=s.length>2&&void 0!==s[2]?s[2]:"en-US",e.next=4,c.get("/movie/".concat(t,"/reviews"),{params:{api_key:o,page:n,language:r}});case 4:return i=e.sent,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var h={fetchTrendingMovies:function(){return u.apply(this,arguments)},searchMovies:function(e){return l.apply(this,arguments)},fetchMovieDetails:function(e){return v.apply(this,arguments)},fetchMovieCast:function(e){return d.apply(this,arguments)},fetchMovieReviews:function(e){return p.apply(this,arguments)}};t.Z=h},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),i=n(439),a=n(757),s=n.n(a),o=n(791),c=n(689),u=n(87),l=n(794),v=n(854),d={detailsContainer:"MovieDetails_detailsContainer__Y0Fjr",imageContainer:"MovieDetails_imageContainer__U65ba",movieInfo:"MovieDetails_movieInfo__4EKMk",movieTitle:"MovieDetails_movieTitle__0CAOT",movieScore:"MovieDetails_movieScore__UQXpa",movieOverview:"MovieDetails_movieOverview__acHno",movieGenres:"MovieDetails_movieGenres__frmdo",additionalInfo:"MovieDetails_additionalInfo__4J0eA",additionalLinks:"MovieDetails_additionalLinks__PXhNc",backButton:"MovieDetails_backButton__pPF5M"},p=n(184),h=function(){var e=(0,c.s0)(),t=(0,c.TH)(),n=(0,c.UO)().movieId,a=(0,o.useState)(null),h=(0,i.Z)(a,2),f=h[0],m=h[1],_=(0,o.useState)(!1),g=(0,i.Z)(_,2),x=g[0],w=g[1],j=(0,o.useState)(null),k=(0,i.Z)(j,2),y=k[0],M=k[1];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,l.Z.fetchMovieDetails(n);case 4:t=e.sent,m(t.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),M(e.t0);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);return(0,p.jsxs)("div",{children:[x&&(0,p.jsx)(v.Z,{size:80,color:"#00BFFF"}),y&&(0,p.jsxs)("div",{className:d.Error,children:["An error occurred: ",y.message]}),f&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("button",{className:d.backButton,onClick:function(){var n,r;e(null!==(n=null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"Back"}),(0,p.jsxs)("section",{className:d.detailsContainer,children:[(0,p.jsx)("div",{className:d.imageContainer,children:(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(f.poster_path),alt:f.title})}),(0,p.jsxs)("div",{className:d.movieInfo,children:[(0,p.jsx)("h2",{className:d.movieTitle,children:f.title}),(0,p.jsxs)("p",{className:d.movieScore,children:["User Score: ",10*f.vote_average,"%"]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{className:d.movieOverview,children:f.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{className:d.movieGenres,children:f.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,p.jsxs)("section",{className:d.additionalInfo,children:[(0,p.jsx)("h3",{children:"Additional information"}),(0,p.jsxs)("ul",{className:d.additionalLinks,children:[(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,p.jsx)(c.j3,{})]})]})}}}]);
//# sourceMappingURL=135.3a2c01a4.chunk.js.map