import { classNames } from 'shared/lib/classNames/classNames'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => (
  <div
    className={classNames('loadingio-spinner-spinner-ylzabjux22b', {}, [
      className ?? ''
    ])}
  >
    <div className="ldio-mr874cz67vc">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
)
