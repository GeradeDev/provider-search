<template>
    <transition name="initializing-wait">
        <div class="wait-initializer" v-if="showInit">
            <div class="loading-initialize"></div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    mounted: function () {
        this.stopInit();
    },
    computed: {
        ...mapGetters({
        GetInitStatus: "getIntilizingStatus",
        }),
        showInit () {
        return this.GetInitStatus;
        }
    },
    methods: {
        ...mapActions({
            stopAppInit: 'stopInit'
        }),
        stopInit() {
            this.stopAppInit();
        }
    }
};
</script>

<style scoped>
   
    .initializing-wait-enter-active, .initializing-wait-leave-active {
        transition: opacity 2s;
    }
    .initializing-wait-enter, .initializing-wait-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .wait-initializer{
        background: white;
        z-index: 99999;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    @keyframes in-out-loading{
        0%,to {
            transform:scale(1);
        }
        50% {
            transform:scale(0);
        }
    }
	
	.animation-loading-header {
        margin: 0px 15px;
        width: 98%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
	
	 .loading-initialize {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0px;
		margin: auto;
		width: 300px;
		height: 300px;
	}

        .loading-initialize::after, .loading-initialize::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: rgba(141,198,63,.4);
            position: absolute;
            top: 0;
            left: 0;
            -webkit-animation: in-out-loading 2s infinite ease-in-out;
            animation: in-out-loading 2s infinite ease-in-out;
            will-change: transform;
        }
		
		.loading-initialize::after {
			-webkit-animation-delay: -1s;
			animation-delay: -1s;
		}

</style>