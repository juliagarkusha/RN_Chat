// External deps
import React, { FC,ReactNode } from "react";
import {
    Modal as RNModal,
    StyleSheet,
    Text,
    Pressable,
    View,
    TouchableOpacity,
} from 'react-native';

type ModalProps = {
    isModalVisible: boolean;
    isCloseButton?: boolean;
    title?: string;
    closeModal: () => void;
    children: ReactNode
};

const Modal: FC<ModalProps> = (props) => {
    const {
        isModalVisible,
        isCloseButton = false,
        title = "",
        closeModal,
        children
    } = props;

    const onCloseModal = () => {
        closeModal();
    };

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
        },
        centeredView: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 22,
            backgroundColor: "rgba(27, 32, 46, .5)",
            borderTopRightRadius: 22,
            borderTopLeftRadius: 22,
        },
        modalView: {
            borderRadius: 20,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
    });

    return (
        <View style={[styles.centeredView, styles.container]}>
            <RNModal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={onCloseModal}
            >
                <TouchableOpacity
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                    }}
                    onPress={onCloseModal}
                >
                    <View style={styles.centeredView}>
                        <TouchableOpacity
                            style={styles.modalView}
                            activeOpacity={1}
                        >
                            {!!title && (
                                <Text style={styles.modalText}>{title}</Text>
                            )}
                            {children}
                            {isCloseButton && (
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={onCloseModal}
                                >
                                    <Text style={styles.textStyle}>Close Modal</Text>
                                </Pressable>
                            )}
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </RNModal>
        </View>
    );
};

export default Modal;
