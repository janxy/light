<template>
    <div class="boxbg"  style="position: relative;">
        <div class="title"><span>环境气象信息</span></div>
        <i class="i1"></i>
        <i class="i2"></i>
        <i class="i3"></i>
        <i class="i4"></i>
      
        <div class="c flex flexc" style="top:40px;">
               <div class="flex center" style="">
                    <img :src="data.icon" width="32" height="32">
                    <div class="flex flexc" style="margin:0 20px;">
                        <span style="color:#00caff; font-size:22px;font-weight: 600;">{{data.t}}</span>
                        <span style="color:#fff;font-size:13px;">天气温度</span>
                    </div>
                    <div style="" class="flex1 flexc">
                        <div class="flex" style="align-items: center; margin-bottom:5px;font-size:22px;">
                            <div :style="'color:'+colors[active].barColor">{{data.pm}}</div>
                            <div  class="flex flex1" style="color:#fff; padding-left:10px; font-size:13px">空气质量</div>
                            <div :style="'color:'+colors[active].barColor">{{colors[active].title}}</div>
                        </div>
                        <div class="flex pr">
                            <div  class="flex flex1 bg0" v-for="(item,index) in colors" :key="index" :style="'background-color:'+colors[index].color"></div>
                            <div class="ball" :style="'background:'+colors[active].barColor+';left:'+(data.pm/300)*100+'%'"></div>
                        </div>
                    </div>




               </div>
               <div style="padding-left:30px; margin-top:15px;">

                   <el-row :gutter="10">


                        <el-col :span="8">
                            <div class="grid-content">
                                <div style=" padding-left:5px;" class="flex center">
                                    <svg t="1597118880676" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2234" width="16" height="16"><path d="M548.295111 514.844444V237.909333a143.075556 143.075556 0 0 0-144.213333-141.653333 142.904889 142.904889 0 0 0-142.108445 141.653333v277.048889a235.861333 235.861333 0 0 0 109.624889 421.262222 232.106667 232.106667 0 0 0 174.592-44.714666 236.259556 236.259556 0 0 0 2.104889-376.604445z m-54.044444-276.992v306.119112l1.706666 0.853333A181.703111 181.703111 0 0 1 562.631111 793.6a182.044444 182.044444 0 1 1-248.775111-248.775111l1.706667-0.853333v-306.062223a90.282667 90.282667 0 0 1 89.315555-89.429333c49.379556 0 89.429333 40.049778 89.429334 89.372444z m328.931555 18.147556h-185.912889a26.567111 26.567111 0 0 1-25.770666-26.567111 26.737778 26.737778 0 0 1 25.770666-25.713778h185.912889c14.336 0 26.168889 11.776 26.168889 26.168889 0 14.279111-11.832889 26.112-26.168889 26.112z m0 123.960889h-185.912889a25.941333 25.941333 0 0 1-25.315555-26.567111 25.6 25.6 0 0 1 25.315555-25.315556h185.912889a25.6 25.6 0 0 1 26.168889 25.713778c0 14.392889-11.832889 26.168889-26.168889 26.168889z m0 117.191111h-185.912889a25.998222 25.998222 0 0 1-26.567111-25.713778 25.998222 25.998222 0 0 1 25.713778-26.567111h186.766222a25.998222 25.998222 0 0 1 26.168889 26.168889c0 14.336-11.832889 26.168889-26.168889 26.168889z" fill="#ffffff" p-id="2235"></path><path d="M405.447111 786.659556a78.279111 78.279111 0 0 1-30.321778-150.528V282.339556a30.208 30.208 0 0 1 30.321778-30.378667 30.264889 30.264889 0 0 1 30.378667 30.378667v353.792a78.279111 78.279111 0 0 1-30.378667 150.528z" fill="#ffffff" p-id="2236"></path></svg>
                                    <span style="color:#fff;padding-left:3px;">温度</span>
                                </div>
                                <span  style=" padding-right:5px;">{{data.t}}</span>
                            </div>
                       </el-col>

                       <el-col :span="8">
                            <div class="grid-content">
                                <div style=" padding-left:5px;" class="flex center">
                                    <svg t="1597118987984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2981" width="16" height="16"><path d="M241.842973 643.183458c21.672486-34.656003 51.634448-63.619233 87.089437-83.893494V125.141129c0-68.313274 55.529504-123.942651 123.942651-123.942651C521.388082 1.198478 576.917585 56.727982 576.917585 125.141129V559.289964c35.454989 20.474008 65.416951 49.237491 87.089437 83.893494 24.668682 39.449917 37.752073 85.091973 37.752073 131.932508 0 66.415683-25.867161 128.936311-72.907442 175.976592-46.940408 46.940408-109.461036 72.907442-175.976592 72.907442-66.415683 0-129.036185-25.867161-175.976592-72.907442-46.940408-46.940408-72.907442-109.461036-72.907442-175.976592 0.099873-46.940408 13.183263-92.48259 37.851946-131.932508z m211.131961 339.768654C567.629377 982.952112 660.81108 889.670535 660.81108 775.016093c0-78.600215-43.644592-149.709939-113.755584-185.364674l-11.085926-5.692773V125.141129c0-45.841802-37.152833-82.994636-82.994636-82.994635-45.841802 0-82.994636 37.152833-82.994636 82.994635v458.91739l-11.185799 5.692773c-70.110992 35.654735-113.755584 106.764459-113.755584 185.364674 0.099873 114.454696 93.281576 207.836146 207.936019 207.836146z m0 0" fill="#ffffff" p-id="2982"></path><path d="M416.321467 666.953282V263.165903c0-20.174388 16.379206-36.653467 36.653467-36.653468 20.174388 0 36.653467 16.379206 36.653467 36.653468v403.687506c42.745733 15.080854 73.207061 55.829123 73.207062 103.568516 0 60.623037-49.137618 109.860529-109.860529 109.860529-60.623037 0-109.860529-49.137618-109.860528-109.860529 0-47.839267 30.661075-88.487662 73.207061-103.468643zM248.534478 134.728957c0-23.070711-42.146494-92.682337-42.146494-92.682336s-42.146494 69.711499-42.146494 92.682336c0 23.070711 18.776163 41.647128 42.146494 41.647128 23.370331 0.099873 42.146494-18.576417 42.146494-41.647128zM164.341364 502.861601c0-34.356383-62.920121-138.324393-62.920121-138.324392S38.600995 468.405345 38.600995 502.861601s28.164245 62.221008 62.920121 62.221009c34.656003 0 62.820248-27.864625 62.820248-62.221009zM868.747098 598.739881c67.314542 0 121.645567-53.931532 121.645568-120.546962s-121.645567-267.660197-121.645568-267.660197-121.645567 201.244514-121.645567 267.660197c0 66.61543 54.430898 120.546962 121.645567 120.546962z" fill="#ffffff" p-id="2983"></path></svg>
                                     <span style="color:#fff; padding-left:3px;">湿度</span>
                                </div>
                                <span  style=" padding-right:5px;">{{data.h}}</span>
                            </div>
                       </el-col>

                       <el-col :span="8">
                            <div class="grid-content">
                                <div style=" padding-left:5px;" class="flex center">
                                    <svg t="1597119107859" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4296" width="16" height="16"><path d="M512.32 734.18666667c-120.96 0-219.41333333-98.45333333-219.41333333-219.41333334s98.45333333-219.41333333 219.41333333-219.41333333c120.96 0 219.41333333 98.45333333 219.41333333 219.41333333s-98.45333333 219.41333333-219.41333333 219.41333334z m0-370.56c-83.30666667 0-151.14666667 67.84-151.14666667 151.14666666s67.84 151.14666667 151.14666667 151.14666667S663.46666667 598.08 663.46666667 514.77333333s-67.84-151.14666667-151.14666667-151.14666666z" p-id="4297" fill="#ffffff"></path><path d="M512.32 514.77333333m-51.73333333 0a51.73333333 51.73333333 0 1 0 103.46666666 0 51.73333333 51.73333333 0 1 0-103.46666666 0Z" p-id="4298" fill="#ffffff"></path><path d="M510.72 257.06666667c-18.88 0-34.13333333-15.25333333-34.13333333-34.13333334v-52.48c0-18.88 15.25333333-34.13333333 34.13333333-34.13333333s34.13333333 15.25333333 34.13333333 34.13333333V222.93333333c0 18.88-15.25333333 34.13333333-34.13333333 34.13333334zM258.77333333 404.37333333c-5.76 0-11.62666667-1.49333333-17.06666666-4.58666666L196.26666667 373.54666667c-16.32-9.38666667-21.86666667-30.29333333-12.48-46.61333334s30.29333333-21.86666667 46.61333333-12.48l45.44 26.24c16.32 9.38666667 21.86666667 30.29333333 12.48 46.61333334-6.29333333 10.88-17.81333333 17.06666667-29.54666667 17.06666666zM214.93333333 722.45333333c-11.84 0-23.25333333-6.08-29.54666666-17.06666666-9.38666667-16.32-3.84-37.22666667 12.48-46.61333334l45.44-26.24c16.32-9.38666667 37.22666667-3.84 46.61333333 12.48 9.38666667 16.32 3.84 37.22666667-12.48 46.61333334L232 717.86666667c-5.33333333 3.09333333-11.30666667 4.58666667-17.06666667 4.58666666zM513.92 893.22666667c-18.88 0-34.13333333-15.25333333-34.13333333-34.13333334v-52.48c0-18.88 15.25333333-34.13333333 34.13333333-34.13333333s34.13333333 15.25333333 34.13333333 34.13333333v52.48c0 18.77333333-15.25333333 34.13333333-34.13333333 34.13333334zM811.30666667 719.68c-5.76 0-11.62666667-1.49333333-17.06666667-4.58666667L748.8 688.85333333c-16.32-9.38666667-21.86666667-30.29333333-12.48-46.61333333 9.38666667-16.32 30.29333333-21.86666667 46.61333333-12.48l45.44 26.24c16.32 9.38666667 21.86666667 30.29333333 12.48 46.61333333-6.29333333 10.88-17.81333333 17.06666667-29.54666666 17.06666667zM764.26666667 401.6c-11.84 0-23.25333333-6.08-29.54666667-17.06666667-9.38666667-16.32-3.84-37.22666667 12.48-46.61333333l45.44-26.24c16.32-9.38666667 37.22666667-3.84 46.61333333 12.48 9.38666667 16.32 3.84 37.22666667-12.48 46.61333333l-45.44 26.24c-5.44 3.09333333-11.30666667 4.58666667-17.06666666 4.58666667z" p-id="4299" fill="#ffffff"></path></svg>
                                    <span style="color:#fff; padding-left:3px;">光照度</span>
                                </div>
                                <span  style=" padding-right:5px;">{{data.light}}</span>
                            </div>
                       </el-col>

                       <el-col :span="8">
                            <div class="grid-content">
                                <div style=" padding-left:5px;" class="flex center">
                                    <svg t="1597119190562" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5335" width="16" height="16"><path d="M888.32 612.352c79.36-32.256 135.168-109.056 135.168-198.656 0-118.784-97.28-214.528-217.088-214.528-12.8 0-28.672 0.512-36.864 3.072-8.192 2.56-17.408 15.36-18.944 29.184-3.072 30.208 25.088 37.888 31.232 38.4 1.024 0 11.776 1.024 25.088 1.024 79.872 0 144.896 64 144.896 143.36 0 78.848-65.024 143.36-144.896 143.36H190.464c-3.072 0-6.144 0.512-9.216 1.024H128c-19.968 0-36.352 15.872-36.352 35.84s16.384 35.84 36.352 35.84h615.936c79.872 0 144.896 64 144.896 143.36 0 78.848-65.024 143.36-144.896 143.36s-134.656-64-134.656-143.36v-2.56c0-19.968-16.384-35.84-36.352-35.328-19.968 0-35.84 16.384-35.84 36.352v2.048c0 118.784 87.04 214.528 206.848 214.528s217.088-96.256 217.088-214.528c0-65.536-28.16-122.368-72.704-161.792z" p-id="5336" fill="#ffffff"></path><path d="M620.544 305.664c0-105.984-86.528-164.352-193.536-164.352-11.264 0-25.6 0.512-33.28 3.072-7.168 2.56-15.872 13.824-16.896 26.112-2.56 27.136 22.016 33.792 27.648 34.304 0.512 0 10.752 0.512 22.016 0.512 71.168 0 129.024 29.696 129.024 100.352S497.664 433.152 426.496 433.152h-394.24c-17.92 0-32.256 14.336-32.256 31.744 0 17.408 14.336 31.744 32.256 31.744h394.24c107.52 1.024 194.048-84.992 194.048-190.976zM661.504 409.6c0 1.024 0 0 0 0z" p-id="5337" fill="#ffffff"></path></svg>
                                     <span style="color:#fff; padding-left:3px;">风向</span>
                                </div>
                                <span  style=" padding-right:5px;">{{data.windDirection}}</span>
                            </div>
                       </el-col>

                       <el-col :span="8">
                            <div class="grid-content">
                                 <div style=" padding-left:5px;" class="flex center">
                                     <svg t="1597119232744" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5783" width="16" height="16"><path d="M532.946 536.457c1.43-26.84-6.986-50.07-24.971-69.046-27.703-29.207-77.114-45.945-135.563-45.945-48.127 0-95.923 11.66-131.125 31.993-5.592 3.227-11.11 6.784-17.6 11.55l-52.527 51.28c-40.079 51.593-59.825 113.048-51.537 160.423 5.262 29.977 21.487 54.325 46.953 70.422 20.827 13.145 40.188 19.526 59.22 19.526 44.844 0 78.23-35.88 113.597-73.85 24.879-26.73 50.62-54.379 82.448-72.768 33.038-19.067 55.955-30.25 71.136-37.64 30.38-14.813 38.538-18.791 39.969-45.945z m-49.594-4.803c-3.355 1.723-7.59 3.795-12.21 6.05-15.805 7.7-39.657 19.342-74.162 39.27-38.373 22.13-67.928 53.903-94.035 81.99-28.968 31.095-53.975 57.955-77.149 57.955-9.35 0-20.021-3.887-32.653-11.862-9.057-5.72-15.51-12.779-19.71-21.56-4.18-8.764-6.196-19.38-5.958-31.553 0.532-26.126 11.055-56.726 29.646-86.17 18.83-29.81 43.342-54.397 69.028-69.248 27.885-16.079 66.625-25.32 106.263-25.32 44.203 0 81.385 11.387 99.463 30.435 7.975 8.434 11.66 18.023 11.477 30.013zM772.645 665.566c-35.605-8.176-72.42-16.647-104.247-35.018-33.02-19.066-54.159-33.33-68.148-42.773-18.168-12.265-27.281-18.407-38.19-18.407-6.93 0-13.402 2.585-21.578 6.765-32.891 16.721-50.823 46.477-51.867 86.023-1.908 72.309 55.697 167.591 125.825 208.073 5.06 2.915 10.359 5.647 17.087 8.672l66.7 19.801c14.85 2.329 29.921 3.52 44.771 3.52 73.116 0 159.708-29.884 163.1-114.146 3.63-90.994-62.959-106.303-133.453-122.51z m83.731 120.51c-0.807 20.057-10.175 34.87-29.48 46.66-20.828 12.742-50.64 19.746-83.897 19.746-38.007 0-75.81-9.24-103.716-25.338-26.126-15.088-52.288-42.022-71.777-73.886-19.214-31.369-29.848-64.096-29.151-89.8 0.531-20.167 7.755-33.55 22.77-41.966 3.355 2.164 7.407 4.913 11.514 7.682 14.539 9.81 36.521 24.623 70.898 44.442 38.208 22.074 80.45 31.81 117.96 40.445 30.637 7.04 59.586 13.677 76.655 25.282 10.157 6.911 19.398 17.361 18.224 46.733zM563.234 418.533c0 38.117-1.779 63.564-2.952 80.395-2.366 33.716-3.007 42.773 19.8 57.587 15.823 10.322 32.8 15.548 50.42 15.548 86.169 0 167.297-127.679 167.297-226.627 0-12.119-1.173-24.897-3.831-39.327l-24.274-72.217c-26.915-54.195-78.085-112.113-141.026-112.113h-0.018c-16.409 0-32.487 4.089-47.815 12.138-80.614 42.351-60.594 107.675-39.382 176.831 10.706 34.926 21.78 71.026 21.78 107.785z m25.777-122.38c-9.222-30.068-17.93-58.486-16.409-79.038 0.917-12.266 5.354-25.503 31.351-39.162 20.131-10.56 40.427-8.067 62.721 6.784 14.172 9.46 28.161 23.614 40.408 40.94 12.449 17.6 22.826 37.97 29.995 58.907 7.17 20.956 10.964 42.003 10.964 60.85 0 37.64-15.932 84.043-41.563 121.096-23.816 34.413-52.93 55.79-75.977 55.79-7.297 0-14.337-2.07-21.45-6.343 0.183-3.996 0.531-8.928 0.88-13.989 1.228-17.49 3.061-43.91 3.061-83.474 0-44.148-12.724-85.656-23.981-122.36z" fill="#ffffff" p-id="5784"></path></svg>
                                    <span style="color:#fff; padding-left:3px;">风速</span>
                                </div>
                                <span  style=" padding-right:5px;">{{data.windSpeed}}</span>
                            </div>
                       </el-col>

                       <el-col :span="8">
                            <div class="grid-content">
                                <div style=" padding-left:5px;" class="flex center">
                                    <svg t="1597119278212" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6177" width="16" height="16"><path d="M981.5 812.8c-1.2 2-30.2 49.1-94.1 83.5-37.2 20-78.7 31.9-123.5 35.2-8.7 0.6-17.5 1-26.4 1-47.5 0-98.2-9.1-151.3-27.2-150.7-51.5-239-48.2-286.4-36.4-43.4 10.8-58.4 30-58.5 30.2l-41.7-27.6c2.4-3.6 24.9-35.4 88.1-51.1 35-8.7 76.3-11 122.6-6.7 56.4 5.2 121 20.1 192 44.3 101.9 34.8 189.8 32.9 261.3-5.6 51.2-27.6 74.8-65 75-65.4l42.9 25.8z m-600.7-63.5c59.8 20.2 117.2 30.4 170.8 30.4 2.6 0 5.1 0 7.7-0.1 45.3-0.8 88-9 126.7-24.3 67.2-26.6 99.9-65.8 101.2-67.4l-38.7-31.7c-1.1 1.3-108.4 127.8-351.7 45.8-269.4-90.9-350.9 37.6-354.3 43.1L85.3 771s-0.1 0.1-0.2 0.3c0.6-1 16.3-24.6 59.1-39.6 41.2-14.5 115.7-23.2 236.6 17.6z m118.6-184.9c0-46.1 37.4-83.5 83.5-83.5s83.5 37.4 83.5 83.5-37.4 83.5-83.5 83.5-83.5-37.4-83.5-83.5z m50 0c0 18.5 15 33.5 33.5 33.5s33.5-15 33.5-33.5-15-33.5-33.5-33.5-33.5 15.1-33.5 33.5z m-121.2-277c36.4 0 66 29.5 66 66 0 36.4-29.5 66-66 66-36.4 0-66-29.5-66-66s29.5-66 66-66z m0 50c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16c-0.1-8.8-7.2-16-16-16z m-164-14.8c13.8 0 25-11.2 25-25s-11.2-25-25-25-25 11.2-25 25 11.2 25 25 25zM164.1 516.4c0-35.9 29.1-65 65-65s65 29.1 65 65-29.1 65-65 65-65-29.1-65-65z m50 0c0 8.3 6.7 15 15 15s15-6.7 15-15-6.7-15-15-15-15 6.8-15 15z m416.5-293.9c0-41.4 33.6-75 75-75s75 33.6 75 75-33.6 75-75 75-75-33.5-75-75z m50 0c0 13.8 11.2 25 25 25s25-11.2 25-25-11.2-25-25-25-25 11.3-25 25z m163.6 386c27.6 0 50-22.4 50-50s-22.4-50-50-50-50 22.4-50 50 22.4 50 50 50z m-459-417c27.6 0 50-22.4 50-50s-22.4-50-50-50-50 22.4-50 50 22.4 50 50 50z m310.1 196c0 13.8 11.2 25 25 25s25-11.2 25-25-11.2-25-25-25-25 11.2-25 25zM364.8 618.4c0 13.8 11.2 25 25 25s25-11.2 25-25-11.2-25-25-25-25 11.2-25 25z" fill="#ffffff" p-id="6178"></path></svg>
                                       <span style="color:#fff; padding-left:3px;">PM2.5</span>
                                </div>
                                <span  style=" padding-right:5px;">{{data.pm}}</span>
                            </div>
                       </el-col>


                    </el-row>
               </div>
     
        </div>

    </div>
</template>
<script>
    var that;
    export default {
        watch:{
            data(newValue,oldValue){
                this.active  = this.colors.findIndex(item => {
                    return  newValue.pm >=item.min && newValue.pm <=item.max;
                });
            }
        },
        data () {
            return { 
                active:0, 
                data:{
                    icon:"",
                    h:"",
                    t:"",
                    light:"",
                    windDirection:"",
                    windSpeed:"",
                    pm:""
                },
                colors:[
                    {color:"#14b497",title:"优",min:0,max:50,barColor:"#40ebcc"},
                    {color:"#d4c812",title:"良",min:51,max:100,barColor:"#f4e500"},
                    {color:"#c87835",title:"轻度污染",min:101,max:200,barColor:"#f78b32"},
                    {color:"#880019",title:"中度污染",min:201,max:200,barColor:"#dd1d41"},
                    {color:"#6e0058",title:"重度污染",min:300,max:500,barColor:"#c538a9"}
                ]
            }
        },

        methods: {
        },
        mounted () {
            //0-300数值，分5类吧，0-50优 51-100 良 101-200 轻度污染 201-300中度污染 300以上重度污染
        },
    }
</script>

<style scoped>
.pr{position: relative;}
.po{position: absolute;}
.ball{width: 10px; height: 10px; border-radius: 10px;  box-shadow: 0 0 10px #fff; position: absolute; top: -2px; left:0;}
.bg0{ max-height:6px; height:6px;  }
.bg1{background-color: #14b497; max-height:5px; height:5px; }
.bg2{background-color: #ada023; max-height:5px; height:5px;}
.bg3{background-color: #c87835; max-height:5px; height:5px;}
.bg4{background-color: #661431; max-height:5px; height:5px;}
.bg5{background-color: #4d015d; max-height:5px; height:5px;}
.grid-content{width: 100%;  height: 35px; background: rgba(0,6,255,0.2); margin-bottom: 10px; color:#00caff; display: flex; justify-content: space-between; align-items: center; font-size:14px;}
</style>

