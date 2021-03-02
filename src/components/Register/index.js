import React from "react";

// toast notifs
import { toast } from "react-toastify";

// history
import history from "../../config/history";

// react hook form
import { useForm } from "react-hook-form";

// custom hooks
import useTitle from "../../hooks/useTitle";

// redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// actions
import { registerUser } from "../../store/actions/auth";

import {
  Container,
  Wrapper,
  Header,
  Form,
  UserInfo,
  FormItem,
  Input,
  Rules,
  Button,
  LoginLink,
  Error
} from "../reusable/Register";

const Register = ({ auth, registerUser }) => {
  useTitle("ثبت نام");
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    registerUser(data, {
      onSuccess: (name) => {
        toast.info(`${name} عزیز خوش آمدید`);
        history.push("/");
      },
      onError: (err) => {
        toast.error(err.message, {
          rtl: false
        });
      }
    });
  };

  // eslint-disable-next-line
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <Container className="fade">
      <Wrapper>
        <Header>
          <h1>ثبت نام</h1>
          <p>
            با عضویت در فروشگاه پاتریس میتوانید از امکانات بیشتر و همچنین
            تخفیفات ویژه بهره مند شوید
          </p>
        </Header>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <UserInfo>اطلاعات کاربری</UserInfo>
          <FormItem>
            <Input
              type="text"
              name="name"
              placeholder="نام و نام خانوادگی خود را وارد کنید (فقط فارسی)"
              autoComplete="off"
              defaultValue=""
              ref={register({
                required: "این فیلد نباید خالی باشد",
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/,
                  message: "فقط از کاراکترهای فارسی استفاده کنید"
                }
              })}
            />
          </FormItem>
          <Error>{errors?.name?.message}</Error>
          <FormItem>
            <Input
              type="text"
              name="email"
              placeholder="ایمیل خود را وارد کنید"
              autoComplete="off"
              defaultValue=""
              ref={register({
                required: "این فیلد نباید خالی باشد",
                pattern: {
                  value: emailPattern,
                  message: "ایمیل را بصورت صحیح وارد کنید"
                }
              })}
            />
            <Error>{errors?.email?.message}</Error>
          </FormItem>
          <FormItem>
            <Input
              type="text"
              name="username"
              placeholder="نام کاربری خود را وارد کنید"
              autoComplete="off"
              defaultValue=""
              ref={register({
                required: "این فیلد نباید خالی باشد",
                minLength: {
                  value: 3,
                  message: "حداقل 3 کاراکتر"
                },
                maxLength: {
                  value: 20,
                  message: "حداکثر 20 کاراکتر"
                }
              })}
            />
            <Error>{errors?.username?.message}</Error>
          </FormItem>
          <FormItem>
            <Input
              type="password"
              name="password"
              placeholder="رمز عبور را وارد کنید"
              autoComplete="off"
              defaultValue=""
              ref={register({
                required: "این فیلد نباید خالی باشد",
                minLength: {
                  value: 6,
                  message: "حداقل 6 کاراکتر"
                }
              })}
            />
            <Error>{errors?.password?.message}</Error>
          </FormItem>
          <FormItem>
            <Rules htmlFor="rules">
              <input
                type="checkbox"
                name="rules"
                ref={register({
                  required: "باید قوانین تایید شود"
                })}
              />
              <span>
                با تمام{" "}
                <a href="##" className="forgot-pass" target="_blank">
                  قوانین
                </a>{" "}
                سایت موافقم
              </span>
            </Rules>
            <Error>{errors?.rules?.message}</Error>
          </FormItem>
          <FormItem>
            <Button type="submit" disabled={auth.loading}>
              ثبت نام
            </Button>
          </FormItem>
          <FormItem>
            <LoginLink to="/login">
              حساب کاربری دارید؟ از اینجا وارد شوید
            </LoginLink>
          </FormItem>
        </Form>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      registerUser
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
