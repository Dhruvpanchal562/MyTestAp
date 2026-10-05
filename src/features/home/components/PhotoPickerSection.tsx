import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { CustomButton } from '../../../components';
import { useTheme } from '../../../utils';

interface PhotoPickerSectionProps {
  selectedPhotoUri: string | null;
  onPhotoSelected: (uri: string | null) => void;
}

export const PhotoPickerSection: React.FC<PhotoPickerSectionProps> = ({
  selectedPhotoUri,
  onPhotoSelected,
}) => {
  const { colors } = useTheme();

  const handleOpenGallery = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        selectionLimit: 1,
      });

      if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
        onPhotoSelected(result.assets[0].uri);
      }
    } catch {
      // Error handled safely
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.border,
        },
      ]}
    >
      <Text style={[styles.sectionTitle, { color: colors.primary }]}>
        Photo Gallery
      </Text>
      <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
        Pick and preview images directly from your device storage.
      </Text>

      {selectedPhotoUri ? (
        <View style={styles.previewContainer}>
          <Image
            source={{ uri: selectedPhotoUri }}
            style={styles.previewImage}
            resizeMode="cover"
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onPhotoSelected(null)}
            style={styles.removeButton}
          >
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <CustomButton
        title="Photos"
        onPress={handleOpenGallery}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    marginBottom: 14,
  },
  previewContainer: {
    marginBottom: 12,
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  removeButton: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  removeText: {
    color: '#EF4444',
    fontSize: 13,
    fontWeight: '600',
  },
  button: {
    marginTop: 4,
  },
});
