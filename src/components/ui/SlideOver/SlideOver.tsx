import { SlideOver } from '@faststore/ui'
import type { SlideOverProps } from '@faststore/ui'

import styles from './slide-over.module.scss'

function Component({ className, children, ...otherProps }: SlideOverProps) {
  return (
    <SlideOver className={`${styles.fsSlideOver} ${className}`} {...otherProps}>
      {children}
    </SlideOver>
  )
}

export default Component
