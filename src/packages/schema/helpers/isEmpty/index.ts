import isEmpty from 'validator/es/lib/isEmpty'
import trim from 'validator/es/lib/trim'

export default function (value: any) {
  if (Array.isArray(value)) {
    return value.length === 0
  }
  return isEmpty(trim(value.toString()))
}
