webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Profile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Profile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      user: ''\n    };\n  },\n  mounted: function mounted() {\n    this.getProfile();\n  },\n  methods: {\n    getProfile: function getProfile() {\n      var _this = this;\n\n      fetch('/api/profile').then(function (data) {\n        return data.json();\n      }).then(function (data) {\n        _this.user = data;\n      });\n    },\n    updateProfile: function updateProfile() {\n      fetch('/api/profile', {});\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3ZpZXdzL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9maWxlLnZ1ZT81YTg4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwMHB4O1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzPVwiY29sIHMxMlwiIHY6b246c3VibWl0LnByZXZlbnQ9XCJ1cGRhdGVQcm9maWxlKClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHByZWZpeFwiPmFjY291bnRfY2lyY2xlPC9pPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiIDp2YWx1ZT1cInVzZXIubmFtZVwiIGNsYXNzPVwidmFsaWRhdGVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaWNvbl9wcmVmaXhcIiBjbGFzcz1cImFjdGl2ZVwiPkZ1bGwgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcHJlZml4XCI+c3RvcmU8L2k+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwidmFsaWRhdGUgXCIgOnZhbHVlPVwidXNlci5jaXR5XCI+XG4gICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaWNvbl90ZWxlcGhvbmVcIiBjbGFzcz1cImFjdGl2ZVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHByZWZpeFwiPmxvY2F0aW9uX2NpdHk8L2k+XG4gICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzdGF0ZVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ2YWxpZGF0ZVwiIDp2YWx1ZT1cInVzZXIuc3RhdGVcIj5cbiAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpY29uX3RlbGVwaG9uZVwiIGNsYXNzPVwiYWN0aXZlXCI+U3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBibHVlXCI+U0FWRTwvYnV0dG9uPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6ICcnXG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZ2V0UHJvZmlsZSgpXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBnZXRQcm9maWxlKCkge1xuICAgICAgZmV0Y2goJy9hcGkvcHJvZmlsZScpXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXG4gICAgICAudGhlbiggZGF0YSA9PiB7XG4gICAgICAgIHRoaXMudXNlciA9IGRhdGEgXG4gICAgICB9IClcbiAgICB9LFxuICAgIHVwZGF0ZVByb2ZpbGUoKSB7XG4gICAgICBmZXRjaCgnL2FwaS9wcm9maWxlJywge1xuXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbi5jYXJkIHtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuZm9ybSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yb3cge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG59XG48L3N0eWxlPlxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4QkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFaQTtBQVRBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Profile.vue?vue&type=script&lang=js&\n");

/***/ })

})