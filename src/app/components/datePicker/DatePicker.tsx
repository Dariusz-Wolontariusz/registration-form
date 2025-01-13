'use client'

import { useState } from 'react'
import {
	PopoverContent,
	Popover,
	PopoverTrigger,
	PopoverAnchor,
	PopoverPortal,
} from '@radix-ui/react-popover'
import { CalendarIcon } from '@radix-ui/react-icons'
import Button from '../button/button'
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
				Your Birthday
			</label>

			<Popover>
				<PopoverTrigger asChild>
					<Button className='trigger-btn' type='button'>
						<CalendarIcon />
						{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
					</Button>
				</PopoverTrigger>
				<PopoverPortal>
					<PopoverContent className='popover-content' sideOffset={5}>
						<Calendar selected={selectedDate} onSelect={handleSelectedDate} />
					</PopoverContent>
				</PopoverPortal>
			</Popover>
		</div>
	)
}
