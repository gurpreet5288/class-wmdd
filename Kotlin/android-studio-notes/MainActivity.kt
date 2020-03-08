package ca.wmdd.ravijeet.myresume

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import androidx.core.app.ActivityCompat

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var btnWork = findViewById<Button>(R.id.btnWorkHistory)
        btnWork.setOnClickListener {
            println("Work History Button Clicked !!")

            var navToWorkHistoryActivity = Intent(getApplicationContext(), WorkHistoryActivity::class.java)
            startActivity(navToWorkHistoryActivity)
        }

        var btnCall = findViewById<Button>(R.id.btnCall)
        btnCall.setOnClickListener {
            println("Call Button Clicked !!")

            var phoneUri= Uri.parse("tel:123473029898")
            var makeCall = Intent(Intent.ACTION_CALL, phoneUri)
            if (ActivityCompat.checkSelfPermission(
                    this,
                    Manifest.permission.CALL_PHONE
                ) != PackageManager.PERMISSION_GRANTED
            ) {
                // TODO: Consider calling
                //    ActivityCompat#requestPermissions
                // here to request the missing permissions, and then overriding
                //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
                //                                          int[] grantResults)
                // to handle the case where the user grants the permission. See the documentation
                // for ActivityCompat#requestPermissions for more details.
                startActivity(makeCall)
            }

        }

        var btnEmail = findViewById<Button>(R.id.btnEmail)
        btnEmail.setOnClickListener {
            println("Email Button Clicked !!")
        }
    }
    
}
