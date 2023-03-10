import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
});

export const Pdf =()=>{
    return(
        <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Sectionasdfasdfsadfasdfasdf #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Sectasdfasdfion #2</Text>
          </View>
        </Page>
      </Document>
    )
}
