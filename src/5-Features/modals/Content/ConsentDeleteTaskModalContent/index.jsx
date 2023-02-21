import Button from "@mui/material/Button";
import { useGreetingModal } from "../../../../6-Entities/modals";
import s from "./index.module.scss";

const ConsentDeleteTaskModalContent = () => {
  const setOpen = useGreetingModal((state) => state.setOpen);

  const handleClick = () => {
    setOpen(false);
  };

  const handleDelete = () => {};

  return (
    <div className={s.content} id="consent-task-delete-modal-content">
      <div className={s["btn-wrap"]}>
        <Button  onClick={handleClick} variant="contained">
          Отмена
        </Button>
        <Button
          id="btn-greeting-ok"
          color="error"
          onClick={handleDelete}
          variant="contained"
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
export default ConsentDeleteTaskModalContent;
