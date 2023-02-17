import Button from "@mui/material/Button";
import { useGreetingModal } from "../../../../6-Entities/modals";
import CustomScrollBar from "../../../../7-Shared/ui/CustomScrollBar";
import s from "./index.module.scss";

const lor =
  "Amet necessitatibus ullam repudiandae ab nesciunt Magnam tempora molestiae mollitia perferendis voluptatem Veniam ex debitis accusamus corrupti quidem, deserunt eligendi, aliquam! Corrupti laborum possimus magni repellat repellat? Temporibus ea excepturi consequuntur similique neque Accusantium fuga quia aliquam porro assumenda? Sunt officia dolorum atque porro mollitia molestiae? Velit accusantium voluptatem quae soluta exercitationem ad! Possimus esse alias delectus nam in? Nihil iusto neque ea officiis error? Doloribus debitis id expedita adipisci hic? Ducimus reiciendis magni vel perferendis natus! Labore maxime molestias ad iste officia eaque, iure dicta Pariatur amet quo sit ducimus dolorum Vero placeat enim expedita laborum repellat, exercitationem aliquam Sit ducimus distinctio accusantium ducimus inventore temporibus. Recusandae sint voluptatum consectetur quidem quae reprehenderit! Dolorum impedit veniam facilis fuga dicta Quis quisquam saepe ut harum.";

const GreetingModalContent = () => {
  const setOpen = useGreetingModal((state) => state.setOpen);

  return (
    <div id='greeting-modal-content'>
      <div className={s.description}>
        <CustomScrollBar>
          <div>{lor}</div>
        </CustomScrollBar>
      </div>
      <div className={s["btn-wrap"]}>
        <Button id='btn-greeting-ok' onClick={() => setOpen(false)} variant="contained">
          Понятно
        </Button>
      </div>
    </div>
  );
};
export default GreetingModalContent;
