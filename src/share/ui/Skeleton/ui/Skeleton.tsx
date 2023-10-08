import {useClassName} from "share/libs/useClassName/useClassName";
import cls from '../models/skeleton.module.scss'
import {CSSProperties, memo} from 'react'

interface SkeletonProps {
    height: string | number
    width: string | number
    border: string | number
}
export const Skeleton: React.FC<SkeletonProps> = memo((props: SkeletonProps) => {
    const {
        height,
        width,
        border
    } = props
    const style: CSSProperties = {
        height: height,
        width: width,
        borderRadius: border
    }
    return (<>
        <div className={cls.ContainerSkeleton}>
            <div style={style} className={useClassName({ cls: cls.Skeleton, mode: {}, classes: [] })}/>
        </div>
    </>)
})
