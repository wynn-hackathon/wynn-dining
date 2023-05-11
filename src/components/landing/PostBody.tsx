import RichText from '../RichText'
import TwoColsLanding from './_TwoColsLanding';
import PromotionLanding from './_PromotionLanding';
import Headline from './_Headline';

const PostBody = ({ landing }: any) => {
  const { twoColums1, promotion1 } = landing?.fields
  return (
    <>
      <Headline landing={landing} />
      {twoColums1 && <TwoColsLanding twoColums1={twoColums1} />}
      {promotion1 && <PromotionLanding promotion1={promotion1} />}
    </>
  )
}

export default PostBody