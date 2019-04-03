<template>
    <div class="main-box">
        <main class="main">
            <header class="header">
                <div class="header-left">
                    <span></span>
                    <span>{{title}}</span>
                </div>
                <div class="header-right">
                    <span>admin</span>
                    <span class="date">{{date}} {{time}}</span>
                    <span>
                        <router-link to="/">退出</router-link>
                    </span>
                    <i
                        class="icon-quit"
                        @click="$router.push({path: '/'})"
                    ></i>
                </div>
            </header>
            <nav class="nav">
                <ul class="nav-box">
                    <li
                        class="nav-item"
                        @click="() => {active=1;init=false;toggleSystem('数据研判')}"
                        :class="{'is-active': active===1&&!init}"
                    >
                        <img
                            src="./img/data_analysis.png"
                            alt=""
                            v-if="active!==1 || init"
                        >
                        <img
                            src="./img/data_analysis_active.png"
                            alt=""
                            v-else
                        >
                        <h6>数据研判</h6>
                    </li>
                    <li
                        class="nav-item"
                        :class="{'is-active': active===2}"
                        @click="() => {active=2; init=false; toggleSystem('运行态势')}"
                    >
                        <router-link to="main/run-status">
                            <img
                                src="./img/run_status.png"
                                alt=""
                                v-if="active!==2"
                            >
                            <img
                                src="./img/run_status_active.png"
                                alt=""
                                v-else
                            >
                            <h6>运行态势</h6>
                        </router-link>
                    </li>
                    <li
                        class="nav-item"
                        :class="{'is-active': active===3}"
                        @click.stop="() => {active=3;showCloudBtn=true; toggleSystem('云防系统')}"
                    >
                        <img
                            src="./img/cloud_logo.png"
                            alt=""
                            v-if="active!==3"
                        >
                        <img
                            src="./img/cloud_logo_active.png"
                            alt=""
                            v-else
                        >
                        <h6>云防系统</h6>
                        <div
                            class="btns"
                            :style="{'visibility': showCloudBtn ? 'visible' : 'hidden'}"
                        >
                            <button
                                class="btn--close"
                                @click="toggleCloudDefense('close')"
                            >关闭</button>
                            <button
                                class="btn--open"
                                @click="toggleCloudDefense('open')"
                            >开启</button>
                        </div>
                    </li>
                </ul>
            </nav>
            <router-view></router-view>
        </main>
        <!-- 	<wave></wave> -->
    </div>
</template>

<script src="./main.ts">

</script>

<style src="./main.less" lang="less">
</style>