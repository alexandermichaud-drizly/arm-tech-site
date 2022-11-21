import FileUploadButton from '../components/step_and_repeat_tool/file_upload_button';
import s from '../styles/StepAndRepeat.module.css';

const StepAndRepeatTool = () => {
  
  const onChange = (formData: FormData) => {
    return;
  }

  return (
    <div className={s.Wrapper}>
      <FileUploadButton 
        label='Upload'
        acceptedFileTypes='image/png'
        allowMultipleFiles
        uploadFileName='logos'
        onChange={onChange}
      />
    </div>
  );
};

export default StepAndRepeatTool;