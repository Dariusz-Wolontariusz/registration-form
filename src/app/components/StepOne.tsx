'use client'
import React, { useState } from 'react'
import {
	Form,
	FormField,
	// FormLabel,
	// FormControl,
	// FormMessage,
	// FormSubmit,
} from '@radix-ui/react-form'
import {
	Root as RadioGroup,
	Item as RadioItem,
	Indicator as RadioIndicator,
} from '@radix-ui/react-radio-group'
import { Label } from '@radix-ui/react-label'

export function StepOne() {
	const [selectedRadio, setSelectedRadio] = useState('')

	return (
		<Form>
			<h2>Specify the type of animal you&apos;re looking for</h2>
			<FormField name='animalType' className='form-field'>
				<RadioGroup
					className='radio'
					value={selectedRadio}
					onValueChange={setSelectedRadio}
				>
					<div className='radio__switch'>
						<RadioItem className='radio__item' value='dog' id='dog'>
							<RadioIndicator className='radio__indicator' />
						</RadioItem>
						<Label htmlFor='dog' className='radio__label'>
							Dog
						</Label>
					</div>
					<div className='radio__switch'>
						<RadioItem className='radio__item' value='cat' id='cat'>
							<RadioIndicator className='radio__indicator' />
						</RadioItem>
						<Label htmlFor='cat' className='radio__label'>
							Cat
						</Label>
					</div>
					<div className='radio__switch'>
						<RadioItem className='radio__item' value='panda' id='panda'>
							<RadioIndicator className='radio__indicator' />
						</RadioItem>
						<Label htmlFor='panda' className='radio__label'>
							Panda
						</Label>
					</div>
				</RadioGroup>
			</FormField>
			{
				<FormField className='FormField' name='animalType'>
					<select name='animal' id='animal'>
						<option value='Dog'>Dog</option>
						<option value='Panda'>Panda</option>
						<option value='Cat'>Cat</option>
						<option value='Lizard'>Lizard</option>
						<option value='Bird'>Bird</option>
					</select>
				</FormField>
			}
		</Form>
	)
}
