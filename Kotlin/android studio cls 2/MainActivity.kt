package ca.wmdd.ravijeet.weatherapp

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.EditText

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var btnGetForecast = findViewById<Button>(R.id.btnGetForecast)

        btnGetForecast.setOnClickListener {
            println("Get Forecast Button Clicked !!")

            val getForecastIntent = Intent(applicationContext, Forecast::class.java)

            var selectedCity = findViewById<EditText>(R.id.txtChooseCity).text

            getForecastIntent.putExtra("selectedCity", selectedCity.toString());

            startActivity(getForecastIntent)
        }
    }
}
