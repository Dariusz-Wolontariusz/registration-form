import React from 'react'
import MultistepForm from './components/multistepForm/MultistepForm'

function Home() {
	return (
		<main>
			<header>
				<title>Welcome to The Registration Form</title>
			</header>
			<section className='form-container'>
				<MultistepForm />
			</section>
		</main>
	)
}

export default Home
