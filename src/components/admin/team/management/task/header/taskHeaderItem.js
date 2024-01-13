import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import emojiIcon from '../../../../../../assets/media/emoji.png';

const TeamManagementTaskHeaderItem = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [popupText, setPopupText] = useState('');
  const [popupEmoji, setPopupEmoji] = useState('');
  const [popupBackgroundColor, setPopupBackgroundColor] = useState('#555');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleDoubleClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleSavePopup = () => {
    // Burada popup bilgilerini kullanabilirsiniz.
    console.log('Text:', popupText);
    console.log('Emoji:', popupEmoji);
    console.log('Background Color:', popupBackgroundColor);

    // Popup'ı kapat
    setPopupOpen(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (emoji) => {
    setPopupEmoji(emoji);
    toggleEmojiPicker(); // Emoji seçildikten sonra EmojiPicker'ı gizle
  };

  const handleDeletePopup = () => {
    // Delete butonuna tıklandığında içeriği sıfırla (sil)
    setPopupText('');
    setPopupEmoji('');
    setPopupBackgroundColor('');
    setPopupOpen(false); // Popup'ı kapat
  };

  const getContrastColor = (backgroundColor) => {
    // Renk kontrast kontrolü için bir algoritma (örneğin, basit bir ışık değeri kontrolü)
    const r = parseInt(backgroundColor.slice(1, 3), 16);
    const g = parseInt(backgroundColor.slice(3, 5), 16);
    const b = parseInt(backgroundColor.slice(5, 7), 16);
    const lightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return lightness > 0.5 ? 'black' : 'white';
  };

  const itemStyle = {
    background: popupBackgroundColor,
    color: popupBackgroundColor ? getContrastColor(popupBackgroundColor) : 'black',
  };

  return (
    <>
      <div className="team-management-task-header-item" onDoubleClick={handleDoubleClick} style={itemStyle}>
        {popupText ? popupEmoji.emoji + ' ' + popupText : 'asd'}
      </div>

      {isPopupOpen && (
        <div className="team-management-task-header-item-text-popup">
          <div className='team-management-task-header-item-text-selector'>
            <label>
              Title:
              <input type="text" value={popupText} onChange={(e) => setPopupText(e.target.value)} />
            </label>
            <div className='team-management-task-header-item-emoji-container'>
              <img
                className='team-management-task-header-item-emoji-button'
                src={emojiIcon}
                alt='emoji'
                onClick={toggleEmojiPicker}
              />

              {showEmojiPicker && (
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              )}
            </div>
          </div>

          <label>
            Background Color:
            <input type="color" value={popupBackgroundColor} onChange={(e) => setPopupBackgroundColor(e.target.value)} />
          </label>
          <div className='button-container'>
            <button
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#f00',
                color: '#fff',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
              onClick={handleDeletePopup}  // Silme fonksiyonunu bağla
            >
              Delete
            </button>
            <button
              style={{
                marginTop: '10px',
                padding: '5px 10px',
                backgroundColor: '#4CAF50',
                color: '#fff',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
              }}
              onClick={handleSavePopup}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamManagementTaskHeaderItem;
