<template>
	<div class="collapsible">
        <div class="collapsible__top">
            	<button @click="showComponent" :class="`collapsible__button ${ !this.collapsed ? 'collapsible__button--rotated' : ''}`">
                    <img src="img/arrow.png" alt="white arrow"/>
                </button>
                <div class="collapsible__title">{{ title }}</div>
        </div>

		<div class="collapsible__component" v-if="!this.collapsed">
			<slot />		
		</div>
	</div>
</template>

<script>
	export default {
		props: {
            title: {
                type: String	
			}
		},
		
		data() {
			return {
				collapsed: true
			};
		},

		methods: {
			showComponent() {
				this.collapsed = !this.collapsed
			}
		}
	};
</script>

<style>
	.collapsible {
		background: #F08383;
		width: 60%;
		height: 100%;
        border-radius: 10px;
        margin: 0 auto;
	}
    .collapsible__top {
        display: flex;
        align-items: center;
    }
    .collapsible__button {
        background: none;
        border: none;
        padding: 0.5em;
		padding-left: 10px;
        cursor: pointer;
    }
    .collapsible__button--rotated {
        transform: rotate(90deg)
    }
    .collapsible__title {
		font-size: 1.2em;
        color: white;
        padding-left: 20px;
    }
	.collapsable__component {
		margin-bottom: 10%;
	}

	
</style>
