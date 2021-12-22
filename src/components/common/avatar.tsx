import Boring from 'boring-avatars'
import { FunctionComponent } from 'react'

type Props = {
  name: string
  size?: number
}

export const Avatar: FunctionComponent<Props> = ({ name, size = 48 }) => (
  <Boring
    colors={[
      '#d97706',
      '#2563eb',
      '#0891b2',
      '#059669',
      '#c026d3',
      '#16a34a',
      '#4f46e5',
      '#65a30d',
      '#ea580c',
      '#db2777',
      '#9333ea',
      '#dc2626',
      '#e11d48',
      '#0284c7',
      '#0d9488',
      '#7c3aed',
      '#ca8a04'
    ]}
    name={name}
    size={size}
    variant="beam"
  />
)
