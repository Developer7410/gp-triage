import { Modal } from 'antd/dist/antd';

function CommonModal({ isModalOpen, handleCancel, title, children }) {
  return (
    <>
      <Modal
        width={957}
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closable={false}
        className="projectModal"
      >
        {children}
      </Modal>
    </>
  );
}

export default CommonModal;
