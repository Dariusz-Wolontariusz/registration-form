import React from 'react'
import { DayPicker } from 'react-day-picker'
import '../calendar/calendar.css'

interface CalendarProps {
	selected: Date | undefined
	onSelect: (date: Date | undefined) => void
}

export default function Calendar({ selected, onSelect }: CalendarProps) {
	return (
		<div>
			<DayPicker
				mode='single'
				selected={selected}
				onSelect={onSelect}
				footer={
					selected
						? `Selected: ${selected.toLocaleDateString()}`
						: 'Choose your birthday.'
				}
			/>
		</div>
	)
}
