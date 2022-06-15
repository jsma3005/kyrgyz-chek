import { Cart } from '../../components/Cart'
import Head from '../Home/Head'
import Categories from './Categories'
import cls from './index.module.scss'
import { PublicProducts } from './PublicProducts'

const Catalog = () => {
  return (
    <>
      <Head />
      <Cart />
      <div className={cls.flex}>
        <div className={cls.categories}>
          <Categories />
        </div>

        <div className={cls.products}>
          <PublicProducts />
        </div>
      </div>
    </>
  )
}

export default Catalog
