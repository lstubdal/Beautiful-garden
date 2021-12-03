<template>
	<div class="contact-form">
		<h2 class="contact-form__title">help from flower experts</h2>
		<div class="contact-form__input">
			<div class="contact-form__fullName">
				<input class="contact-form__firstName" type="text" placeholder="First name" v-model="form.firstName" />
				<input class="contact-form__lastName" type="text" placeholder="Last name" v-model="form.lastName" />
			</div>
			<input class="contact-form__email" type="email" placeholder="E-mail" v-model="form.email" />
			<input class="contact-form__message" type="textarea" placeholder="What do you need help with?" v-model="form.message" />
		</div>
		<button class="contact-form__button" @click="submit_form">Ask!</button>
	</div> 	
</template>

<script>
	export default {
		data() {
			return {
				form: {
					firstName: null,
					lastName: null,
					email: null,
					message: null,
				},
			};
		},

		methods: {
			submit_form() {
				alert(`Thank you for contacting us, ${this.firstName}. We'll get back to you as soon as possible!`);
			},
		},
	};
</script>

<style>
	.contact-form {
		background: #FFDBB0;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}

	.contact-form__title {
		font-size: 1.1em;
		font-family: var(--main-font);
		font-weight: bold;
		align-self: center;
	}

	.contact-form__input input {
		display: flex;
		flex-direction: column;
		border: none;
		border-radius: 10px;
		padding: 1em;
		margin-top: 0.5em;
		width: 100%;
	}

	.contact-form__firstName {
		margin-right: 0.5em;
	}

	.contact-form__fullName {
		display: flex; 
		align-items: center;
	}

	.contact-form__message {
		border: none;
		border-radius: 10px;
		padding: 1em;
		margin-top: 0.5em;
		height: 70%;
	}

	.contact-form__button {
		width: 20%;
		height: 8%;
		align-self: center;
		border: none; 
		border-radius: 10px; 
		cursor: pointer;
		background-color: var(--light);
		margin-top: 10%;
	}

	.contact-form__button:hover {
		background: var(--light); 
	}

	/* media query */ 
	
	@media screen and (max-width: 480px) {
		.contact-form {
			height: 60vh;
		}
	}
</style>