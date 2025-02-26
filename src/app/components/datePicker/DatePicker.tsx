'use client'

import { useState } from 'react'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@radix-ui/react-popover'
import { CalendarIcon } from '@radix-ui/react-icons'
import Calendar from '../calendar/Calendar'
import styles from './DatePicker.module.css'
import type { FormData } from '@/app/lib/types'

interface DatePickerProps {
	value?: Date
	onChange?: (date: Date | undefined) => void
	formData?: FormData
	updateFormData?: (data: Partial<FormData>) => void
}

export function DatePicker({
	value,
	onChange,
	formData,
	updateFormData,
}: DatePickerProps) {
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(value)

	const handleSelectedDate = (date: Date | undefined) => {
		setSelectedDate(date)
		if (onChange) {
			onChange(date)
		}
		if (updateFormData) {
			updateFormData({ birthday: date })
		}
	}

	return (
		<div className={styles['date-picker']}>
			<label htmlFor='birthday' className={styles['date-picker-label']}>
				Pick your birthday
			</label>
			<Popover>
				<PopoverTrigger asChild>
					<button className={styles['trigger-btn']} type='button'>
						<CalendarIcon />
						{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
					</button>
				</PopoverTrigger>
				<PopoverContent className={styles['popover-content']} sideOffset={5}>
					<Calendar selected={selectedDate} onSelect={handleSelectedDate} />
				</PopoverContent>
			</Popover>
		</div>
	)
}
