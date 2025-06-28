import React from 'react';

export default function ModalWrapper({ title, onClose, children }) {
    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <div style={styles.header}>
                    <h3 style={styles.title}>{title}</h3>
                    <button onClick={onClose} style={styles.closeBtn}>×</button>
                </div>
                <div style={styles.content}>{children}</div>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '1rem', // ✅ Ensures spacing on small screens
    boxSizing: 'border-box',
  },
  modal: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: '500px', // ✅ modal won’t overflow past this width
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    position: 'relative',
    boxSizing: 'border-box',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
    header: {
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: '15px'
    },
    closeBtn: {
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer'
    },
    title: {
        fontSize: '18px', fontWeight: 'bold', margin: 0
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
    }
};
