import {useEffect} from "react";
import {useAppDispatch} from "share/libs/useRedux/useRedux";
import {fetchGoodById} from "../models/actions/fetchGoodById";
import {getGood, getLoadingGood} from "entities/Good";
import {useSelector} from "react-redux";
import {Skeleton} from "share/ui/Skeleton";
import {useTranslation} from "react-i18next";
import panel1 from './imgs/panel1.png'
import panel2 from './imgs/panel2.png'
import panel3 from './imgs/panel3.png'
import cls from './GoodItem.module.scss'
import {useClassName} from "share/libs/useClassName/useClassName";
import {ButtonCustom} from "share/ui/ButtonCustom";
import {ButtonCustomState} from "share/ui/ButtonCustom/ui/ButtonCustom";

interface GoodItemProps {
    id: string
}
export const GoodItem: React.FC<GoodItemProps> = (props: GoodItemProps) => {
    const {
        id
    } = props
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    const data = useSelector(getGood)
    const isLoading = useSelector(getLoadingGood)
    useEffect(() => {
        dispatch(fetchGoodById(id))
    }, [])
     if (isLoading && !data) {
          return (
              <div >
                  <Skeleton height={'80vh'} width={'1400px'} border={'20px'}/>
              </div>
          )
     }
    return (<>
       <div className = {cls.ContainerItem}>
           <div className={cls.PurchaseContainer}>
               <div className={cls.ImgContainer}>
                   <img id={cls.img1} className={useClassName({cls: cls.ImgItem , mode: {}, classes:[cls.item, cls.item1]})} src={panel1}/>
                   <img id={cls.img2} className={useClassName({cls: cls.ImgItem , mode: {}, classes:[]})} src={panel2}/>
                   <img id={cls.img2} className={useClassName({cls: cls.ImgItem , mode: {}, classes:[]})} src={panel3}/>
               </div>
               <div className={cls.Panel}>
                   <h2 style={{fontSize: "30px"}}>SUNERGY 435w-450w</h2>
                   <h2>solární panel</h2>
                   <h2>300.00 Kč</h2>
                   <ButtonCustom classes={cls.buttonPurchase} state={ButtonCustomState.BUTTONPURCHASE}>{t('Přidat do košíku')}</ButtonCustom>
               </div>
           </div>
           <div className={cls.ButtonContainer}>
               <ButtonCustom classes={cls.button} state={ButtonCustomState.NAVBARBUTTON}>Charakteristika</ButtonCustom>
               <ButtonCustom classes={cls.button} state={ButtonCustomState.NAVBARBUTTON}>Recenze</ButtonCustom>
               <ButtonCustom classes={cls.button} state={ButtonCustomState.NAVBARBUTTON}>Certifikáty</ButtonCustom>
           </div>
           <h1 className={cls.Order}>{t('MODEL')}: {data?.model}</h1>
           <div className={cls.CharacteristicContainer}>
               <h1>{t('Statická přenosová charakteristika')}</h1>
               <div className={cls.InnerInfoContainer}>
                   <div><p>{t('Jmenovitý výkon')}</p> <p>{data?.Characteristic?.Ratedpower}</p></div>
                   <div><p>{t('Voc')}</p> <p>{data?.Characteristic?.Voc}</p></div>
                   <div><p>{t('Isc')}</p> <p>{data?.Characteristic?.Isc}</p></div>
                   <div><p>{t('Vmp')}</p> <p>{data?.Characteristic?.Vmp}</p></div>
                   <div><p>{t('Imp')}</p> <p>{data?.Characteristic?.Imp}</p></div>
                   <div><p>{t('Účinnost')}</p> <p>{data?.Characteristic?.Účinnost}</p></div>
                   <div><p>{t('Tolerance')}</p> <p>{data?.Characteristic?.Tolerance}</p></div>
                   <div><p>{t('Maximální napětí systému')}</p> <p>{data?.Characteristic?.Maximální}</p></div>
                   <div><p>{t('Tlak větru/sněhu')}</p> <p>{data?.Characteristic?.Tlak}</p></div>
               </div>
           </div>
           <div className={cls.StructureContainer}>
               <h1>{t('Strukturální vlastnost')}</h1>
               <div className={cls.InnerInfoContainer}>
                   <div><p>{t('Rozměr')}</p>  <p>{data?.Structure?.Rozměr}</p></div>
                   <div><p>{t('Tloušťka')}</p>  <p>{data?.Structure?.Tloušťka}</p></div>
                   <div><p>{t('Weight')}</p>  <p>{data?.Structure?.Weight}</p></div>
                   <div><p>{t('Článek')}</p>  <p>{data?.Structure?.Článek}</p></div>
                   <div><p>{t('Propojovací skříňka')}</p>  <p>{data?.Structure?.Propojovací}</p></div>
                   <div><p>{t('Konektor')}</p>  <p>{data?.Structure?.Konektor}</p></div>
               </div>
           </div>
       </div>
        </>)
}
