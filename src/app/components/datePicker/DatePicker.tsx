'use client'

import { useState } from 'react'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@radix-ui/react-popover'
import { CalendarIcon } from '@radix-ui/react-icons'
import Calendar from '../calendar/Calendar'
import './DatePicker.css'

export function DatePicker() {
	const [selectedDate, setSelectedDate] = useState<Date>()

	const handleSelectedDate = (date: Date | undefined) => {
		setSelectedDate(date)
	}

	return (
		<div className='date-picker'>
			<label htmlFor='birthday' className='date-picker-label'>
				Pick your birthday
			</label>
			<Popover>
				<PopoverTrigger asChild>
					<button className='trigger-btn' type='button'>
						<CalendarIcon />
						{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
					</button>
				</PopoverTrigger>
				<PopoverContent className='popover-content' sideOffset={5}>
					<Calendar selected={selectedDate} onSelect={handleSelectedDate} />
				</PopoverContent>
			</Popover>
		</div>
	)
}
