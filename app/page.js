// import { SmallDropdown } from '@/devlink/SmallDropdown'
'use client'
import React, { useState } from 'react'
import { FormCheckbox } from '@/devlink/FormCheckbox'
import { FormRadio } from '@/devlink/FormRadio'
import { useForm, Controller } from 'react-hook-form'
import { Input } from '@/devlink/Input'
export default function Home() {
  const {
    handleSubmit,
    control,
    watch,
    setValue,
    getValues,
    formState: { errors, dirtyFields },
  } = useForm({ mode: 'onChange' })
  console.log('getValues', getValues())

  const handleTypeChange = (event) => {
    console.log('Selected type:', event.target.value)
  }
  return (
    <main>
      {/* <SmallDropdown /> */}
      {
        <>
          <h3>Regular Input form</h3>
          <Controller
            render={({ field }) => (
              <ul>
                <li>
                  <input
                    {...field}
                    type="radio"
                    id="type2"
                    name="type"
                    value="2"
                    onChange={handleTypeChange}
                  />
                  <label htmlFor="type2">Type 2</label>
                </li>
                <li>
                  <input
                    {...field}
                    type="radio"
                    id="type4"
                    name="type"
                    value="4"
                    onChange={handleTypeChange}
                  />
                  <label htmlFor="type4">Type 4</label>
                </li>
                <li>
                  <input
                    {...field}
                    type="radio"
                    id="type6"
                    name="type"
                    value="6"
                    onChange={handleTypeChange}
                  />
                  <label htmlFor="type6">Type 6</label>
                </li>
              </ul>
            )}
            control={control}
            name="test1"
          />
          <h3>Devlink Checkbox as an Input component</h3>
          <Controller
            render={({ field }) => (
              <ul>
                <li>
                  <Input
                    inputProps={{
                      ...field,
                      type: 'radio',
                      id: 'type1',
                      name: 'type',
                      value: '1',
                      onChange: handleTypeChange,
                    }}
                  />
                  <label htmlFor="type1">Type 1</label>
                </li>
                <li>
                  <Input
                    inputProps={{
                      ...field,
                      type: 'radio',
                      id: 'type3',
                      name: 'type',
                      value: '3',
                      onChange: handleTypeChange,
                    }}
                  />
                  <label htmlFor="type3">Type 3</label>
                </li>
                <li>
                  <Input
                    inputProps={{
                      ...field,
                      type: 'radio',
                      id: 'type5',
                      name: 'type',
                      value: '5',
                      onChange: handleTypeChange,
                    }}
                  />
                  <label htmlFor="type5">Type 5</label>
                </li>
              </ul>
            )}
            control={control}
            name="test2"
          />
          <h3>Devlink Checkbox as an FormRadio component</h3>
          <Controller
            render={({ field }) => (
              <ul>
                <li>
                  <FormRadio
                    label={'Type 01'}
                    chProps={{
                      ...field,
                      type: 'radio',
                      id: 'type01',
                      name: 'type',
                      value: '01',
                      onChange: handleTypeChange,
                    }}
                  />
                </li>
                <li>
                  <FormRadio
                    label={'Type 03'}
                    chProps={{
                      ...field,
                      type: 'radio',
                      id: 'type03',
                      name: 'type',
                      value: '03',
                      onChange: handleTypeChange,
                    }}
                  />
                </li>
                <li>
                  <FormRadio
                    label={'Type 05'}
                    chProps={{
                      ...field,
                      type: 'radio',
                      id: 'type05',
                      name: 'type',
                      value: '05',
                      onChange: handleTypeChange,
                    }}
                  />
                </li>
              </ul>
            )}
            control={control}
            name="test3"
          />
          {/* <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <FormRadio
                label="female"
                chProps={{
                  ...field,
                  onChange: (e) => {
                    e.preventDefault()
                    console.log(
                      'e.target.checked F',
                      e.target.checked,
                      isFemale,
                      isMale
                    )
                    if (isMale && e.target.checked) {
                      setIsMale(false)
                      setIsFemale(true)
                    } else {
                      setIsFemale(e.target.checked)
                    }
                  },
                }}
              />
            )}
          /> */}
        </>
      }
    </main>
  )
}
