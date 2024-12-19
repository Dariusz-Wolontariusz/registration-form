import React from 'react'
import MultistepForm from './components/multistepForm/MultistepForm'

function Home() {
	return (
		<main>
			<header>
				<h1>Welcome to The Registration Form</h1>
			</header>
			<section className='form__container'>
				<MultistepForm />
			</section>
		</main>
	)
}

export default Home
