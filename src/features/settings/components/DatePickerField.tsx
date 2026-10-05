import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CustomButton } from '../../../components';
import { useTheme } from '../../../utils';

interface DatePickerFieldProps {
  label: string;
  value: string;
  onDateChange: (dateString: string) => void;
}

const months = [
  '01 - Jan',
  '02 - Feb',
  '03 - Mar',
  '04 - Apr',
  '05 - May',
  '06 - Jun',
  '07 - Jul',
  '08 - Aug',
  '09 - Sep',
  '10 - Oct',
  '11 - Nov',
  '12 - Dec',
];

export const DatePickerField: React.FC<DatePickerFieldProps> = ({
  label,
  value,
  onDateChange,
}) => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const parsedDate = value ? value.split('-') : ['1995', '08', '15'];
  const [selectedYear, setSelectedYear] = useState(parsedDate[0] || '1995');
  const [selectedMonth, setSelectedMonth] = useState(parsedDate[1] || '08');
  const [selectedDay, setSelectedDay] = useState(parsedDate[2] || '15');

  const years = Array.from({ length: 80 }, (_, i) => `${2024 - i}`);
  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, '0')
  );

  const handleConfirm = () => {
    onDateChange(`${selectedYear}-${selectedMonth}-${selectedDay}`);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colors.textPrimary }]}>{label}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setModalVisible(true)}
        style={[
          styles.fieldButton,
          {
            backgroundColor: colors.cardBackground,
            borderColor: colors.border,
          },
        ]}
      >
        <Text style={[styles.fieldText, { color: colors.textPrimary }]}>
          {value || 'Select birthdate'}
        </Text>
        <Text style={styles.calendarIcon}>📅</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View
            style={[
              styles.modalContent,
              {
                backgroundColor: colors.cardBackground,
                borderColor: colors.border,
              },
            ]}
          >
            <Text style={[styles.modalTitle, { color: colors.textPrimary }]}>
              Select Birthdate
            </Text>

            <View style={styles.pickerColumns}>
              {/* Year Column */}
              <View style={styles.column}>
                <Text style={[styles.columnHeader, { color: colors.textSecondary }]}>
                  Year
                </Text>
                <ScrollView
                  style={[styles.scrollList, { backgroundColor: colors.background }]}
                >
                  {years.map((y) => (
                    <TouchableOpacity
                      key={y}
                      onPress={() => setSelectedYear(y)}
                      style={[
                        styles.itemOption,
                        selectedYear === y && {
                          backgroundColor: colors.primary,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.itemText,
                          {
                            color:
                              selectedYear === y ? colors.white : colors.textPrimary,
                          },
                        ]}
                      >
                        {y}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {/* Month Column */}
              <View style={styles.column}>
                <Text style={[styles.columnHeader, { color: colors.textSecondary }]}>
                  Month
                </Text>
                <ScrollView
                  style={[styles.scrollList, { backgroundColor: colors.background }]}
                >
                  {months.map((m, idx) => {
                    const monthVal = (idx + 1).toString().padStart(2, '0');
                    return (
                      <TouchableOpacity
                        key={monthVal}
                        onPress={() => setSelectedMonth(monthVal)}
                        style={[
                          styles.itemOption,
                          selectedMonth === monthVal && {
                            backgroundColor: colors.primary,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.itemText,
                            {
                              color:
                                selectedMonth === monthVal
                                  ? colors.white
                                  : colors.textPrimary,
                            },
                          ]}
                        >
                          {m}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>

              {/* Day Column */}
              <View style={styles.column}>
                <Text style={[styles.columnHeader, { color: colors.textSecondary }]}>
                  Day
                </Text>
                <ScrollView
                  style={[styles.scrollList, { backgroundColor: colors.background }]}
                >
                  {days.map((d) => (
                    <TouchableOpacity
                      key={d}
                      onPress={() => setSelectedDay(d)}
                      style={[
                        styles.itemOption,
                        selectedDay === d && {
                          backgroundColor: colors.primary,
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.itemText,
                          {
                            color:
                              selectedDay === d ? colors.white : colors.textPrimary,
                          },
                        ]}
                      >
                        {d}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>

            <View style={styles.modalActions}>
              <CustomButton
                title="Cancel"
                variant="outline"
                onPress={() => setModalVisible(false)}
                style={styles.actionBtn}
              />
              <CustomButton
                title="Apply"
                onPress={handleConfirm}
                style={styles.actionBtn}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  fieldButton: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fieldText: {
    fontSize: 15,
  },
  calendarIcon: {
    fontSize: 18,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    borderWidth: 1,
    maxHeight: '75%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  pickerColumns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    height: 220,
    marginBottom: 16,
  },
  column: {
    flex: 1,
  },
  columnHeader: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 6,
    textAlign: 'center',
  },
  scrollList: {
    borderRadius: 8,
    padding: 4,
  },
  itemOption: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 2,
  },
  itemText: {
    fontSize: 13,
    fontWeight: '600',
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionBtn: {
    flex: 1,
  },
});
