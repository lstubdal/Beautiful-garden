<template>
	<Pin />
	<div class="contact-form">
		<h2 class="contact-form__title">{{ title }}</h2>
		<form class="contact-form__input">	
			<div class="contact-form__error">
				<p>{{ error }}</p>
				<p class="contact-form__error">{{ firstNameValidation }}</p>
				<p class="contact-form__error">{{ lastNameValidation }}</p>
				<p class="contact-form__error">{{ emailValidation }}</p>
				<p class="contact-form__error">{{ messageValidation }}</p>
		</div>
			<div class="contact-form__fullName">
				<input class="contact-form__firstName" type="text" placeholder="First name" v-model="form.firstName" />	
				<input class="contact-form__lastName" type="text" placeholder="Last name" v-model="form.lastName" />
			</div>
			<input class="contact-form__email" type="email" placeholder="E-mail" v-model="form.email" />
			<textarea class="contact-form__message" type="textarea" cols="1" placeholder="What do you need help with?" v-model="form.message" />
		</form>
		<button class="contact-form__button" @click.prevent="validateForm">Ask!</button> <!-- Modifier: the submit event will no longer reload the page -->
	</div> 	
</template>

<script>
	import Pin from '../components/Pin.vue';

	export default {
		components: {
			Pin
		},

		data() {
			return {
				title: 'help from flower experts',
				error: '',	
				form: {
					firstName: '',
					lastName: '',
					email: '',
					message: '',
				},
			};
		},

		methods: {
			validateForm() {
				if (this.form.firstName.length && this.form.lastName.length && this.form.email.length && this.form.message.length  ) {							// if 0, this form did not pass validation 
					return this.error = 'Form sent!';				// if greater than 0, validation passed and form sent
				}
				return this.error = 'Invalid form.';
			},
			resetForm() {

			}
		},

		computed: {
			firstNameValidation: function () {
				if ( ! this.form.firstName.length && this.error) {
					alert('First name is required');
				}
			},
			lastNameValidation: function () {
				if ( ! this.form.lastName.length && this.error) {
					alert('Last name is required');
				}
			},
			emailValidation: function () {
				if ( ! this.form.email.length && this.error) {
					alert('E-mail is required');
				}
			},
			messageValidation: function () {
				if ( ! this.form.message.length && this.error) {
					alert('Message is required');
				}
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
		padding: 0.8em;
	}

	.contact-form__title {
		padding-top: 0.2em;
		font-size: 1.1em;
		font-family: var(--main-font);
		font-weight: bold;
		align-self: center;
	}

	.contact-form__error p  {
		position: relative;
		color: darkred;
		text-align: center;
	}
	.contact-form__input input {
		position: relative;
		display: flex;
		flex-direction: column;
		border: none;
		border-radius: 10px;
		padding: 1em;
		margin-top: 0.5em;
		width: 100%;
	}
	.contact-form__fullName {
		display: flex; 
		align-items: center;
	}
	.contact-form__firstName {
		margin-right: 0.5em;
	}
	.contact-form__message {
		font-family: var(--main-font);
		resize: none;
		border: none;
		border-radius: 10px;
		padding: 1em;
		margin-top: 0.5em;
		height: 60%;
		width: 100%;
	}

	.contact-form__button {
		width: 20%;
		height: 8%;
		align-self: center;
		border: none; 
		border-radius: 10px; 
		cursor: pointer;
		background-color: var(--light);
		margin-top: 3.5em;
	}

	.contact-form__button:hover {
		box-shadow: orange 0 0.5em 0.5em -0.5em;
	}
	/* media query */ 
	
	@media screen and (max-width: 480px) {
		.contact-form {
			height: 60vh;
		}
	}
</style>


//Sources: Alejandro's code and Scrimba 