package com.example.kip.pickem_droid.services

import com.example.kip.pickem_droid.BuildConfig
import com.example.kip.pickem_droid.services.models.UserCredentials
import com.example.kip.pickem_droid.services.models.UserLoggedIn
import io.reactivex.Observable

import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory

class AuthService
{
    private val _authRestService: IAuthRestService = createAuthRestService()

    fun startLogin(userName: String, password: String) : Observable<UserLoggedIn>
    {
        var userCredentials = UserCredentials(userName, password)

        return _authRestService.login(userCredentials)
    }

    private fun createAuthRestService() : IAuthRestService {
        val retrofit = Retrofit.Builder()
                .addCallAdapterFactory(
                        RxJava2CallAdapterFactory.create())
                .addConverterFactory(
                        GsonConverterFactory.create())
                .baseUrl(BuildConfig.pickemRestServerBaseUrl)
                .build()

        return retrofit.create(IAuthRestService::class.java)
    }

}