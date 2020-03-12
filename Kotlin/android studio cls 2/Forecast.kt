package ca.wmdd.ravijeet.weatherapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ArrayAdapter
import android.widget.ListView
import android.widget.TextView

class Forecast : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_forecast)

        var selectedCity = intent.extras!!.getString("selectedCity")
        findViewById<TextView>(R.id.lblForecast).text = "Forecast for $selectedCity"

        var listView = findViewById<ListView>(R.id.lstViewContainer)

        var tstList = listOf("Line 1", "Line 2", "Line 3")

        var tstAdapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, tstList)

        listView.adapter = tstAdapter
    }
}
