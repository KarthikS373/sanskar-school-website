import React, { useState } from "react"

import { Listbox } from "@headlessui/react"

interface SelectionProps extends Props {
  data: Array<{
    id: string | number
    value: string
    name: string
    disable?: boolean
  }>
  append?: React.ReactNode
  prepend?: React.ReactNode
  popupDecoration?: string
  parentDecoration?: string
}

const Selection = ({
  data,
  className,
  append,
  prepend,
  popupDecoration,
  parentDecoration,
}: SelectionProps) => {
  const [selection, setSelection] = useState<
    | {
        id: string | number
        value: string
        name: string
        disable?: boolean
      }
    | undefined
  >(data[0])

  return (
    <Listbox
      value={selection?.value}
      onChange={(e) => {
        const item = data.find((i) => i.value === e)
        setSelection(item)
      }}
    >
      <div className={"relative " + parentDecoration}>
        <Listbox.Button
          className={
            "peer flex w-full flex-row gap-2 rounded-md bg-transparent px-4 py-2 font-thin shadow outline-none ring-1 ring-gray-400/50 drop-shadow-sm transition-all duration-200 ease-in-out " +
            className
          }
        >
          {append && append}
          <span>{selection?.name}</span>
          {prepend && prepend}
        </Listbox.Button>
        <Listbox.Options
          className={
            "absolute z-20 w-full cursor-pointer rounded bg-primary-50 shadow [&>*]:px-4 [&>*]:py-2 " +
            popupDecoration
          }
        >
          {data.map((item) => (
            <Listbox.Option key={item.id} value={item.value} disabled={item.disable || false}>
              {item.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  )
}

export default Selection
