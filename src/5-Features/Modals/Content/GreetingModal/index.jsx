import CustomScrollBar from '../../../../7-Shared/ui/CustomScrollBar';
import s from './index.module.scss'

const lor = 'Amet necessitatibus ullam repudiandae ab nesciunt Magnam tempora molestiae mollitia perferendis voluptatem Veniam ex debitis accusamus corrupti quidem, deserunt eligendi, aliquam! Corrupti laborum possimus magni repellat repellat? Temporibus ea excepturi consequuntur similique neque Accusantium fuga quia aliquam porro assumenda? Sunt officia dolorum atque porro mollitia molestiae? Velit accusantium voluptatem quae soluta exercitationem ad! Possimus esse alias delectus nam in? Nihil iusto neque ea officiis error? Doloribus debitis id expedita adipisci hic? Ducimus reiciendis magni vel perferendis natus! Labore maxime molestias ad iste officia eaque, iure dicta Pariatur amet quo sit ducimus dolorum Vero placeat enim expedita laborum repellat, exercitationem aliquam'

const GreetingModalContent = () => {
  return (
    <div>
      <div className={s.description}>
        <CustomScrollBar >
          <div>{lor}</div>
        </CustomScrollBar >
        </div>
    </div>
  );
};
export default GreetingModalContent;
